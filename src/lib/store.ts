import { useSyncExternalStore } from "react";
import { defaultData, type SiteData } from "@/data/mockData";

const STORAGE_KEY = "prospera_site_data_v1";
type Listener = () => void;

const listeners = new Set<Listener>();
let cache: SiteData | null = null;

function isBrowser() {
  return typeof window !== "undefined";
}

function merge(saved: Partial<SiteData>): SiteData {
  return {
    ...defaultData,
    ...saved,
    company: { ...defaultData.company, ...(saved.company ?? {}) },
    settings: {
      ...defaultData.settings,
      ...(saved.settings ?? {}),
      social: { ...defaultData.settings.social, ...(saved.settings?.social ?? {}) },
    },
    homepage: { ...defaultData.homepage, ...(saved.homepage ?? {}) },
    leadership: { ...defaultData.leadership, ...(saved.leadership ?? {}) },
  };
}

export function getData(): SiteData {
  if (!isBrowser()) return defaultData;
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cache = raw ? merge(JSON.parse(raw)) : defaultData;
  } catch {
    cache = defaultData;
  }
  return cache;
}

export function saveData(next: SiteData) {
  cache = next;
  if (isBrowser()) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage full or unavailable */
    }
  }
  listeners.forEach((l) => l());
}

export function updateData(updater: (prev: SiteData) => SiteData) {
  saveData(updater(getData()));
}

export function updateSection<K extends keyof SiteData>(key: K, value: Partial<SiteData[K]>) {
  updateData((prev) => ({ ...prev, [key]: { ...(prev[key] as object), ...(value as object) } as SiteData[K] }));
}

export function setList<K extends "services" | "projects" | "gallery" | "testimonials" | "enquiries">(
  key: K,
  list: SiteData[K],
) {
  updateData((prev) => ({ ...prev, [key]: list }));
}

export function upsertItem<K extends "services" | "projects" | "gallery" | "testimonials" | "enquiries">(
  key: K,
  item: SiteData[K][number],
) {
  updateData((prev) => {
    const list = prev[key] as Array<{ id: string }>;
    const exists = list.some((i) => i.id === item.id);
    const next = exists ? list.map((i) => (i.id === item.id ? item : i)) : [...list, item];
    return { ...prev, [key]: next };
  });
}

export function deleteItem<K extends "services" | "projects" | "gallery" | "testimonials" | "enquiries">(
  key: K,
  id: string,
) {
  updateData((prev) => ({ ...prev, [key]: (prev[key] as Array<{ id: string }>).filter((i) => i.id !== id) }));
}

export function resetData() {
  if (isBrowser()) window.localStorage.removeItem(STORAGE_KEY);
  cache = defaultData;
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  if (isBrowser()) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (isBrowser()) window.removeEventListener("storage", onStorage);
  };
}

/** Live site data — re-renders whenever admin edits are saved. */
export function useSiteData(): SiteData {
  return useSyncExternalStore(subscribe, getData, () => defaultData);
}

export function uid(prefix = "id") {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
