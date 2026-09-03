// Frontend-only DEMO authentication. Not production-grade.
import { useSyncExternalStore } from "react";

export const DEMO_CREDENTIALS = { email: "admin@prosperaarcon.com", password: "Admin@123" };
const KEY = "prospera_admin_session";
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(KEY) === "1";
}

export function login(email: string, password: string) {
  const ok = email.trim().toLowerCase() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;
  if (ok) {
    window.sessionStorage.setItem(KEY, "1");
    notify();
  }
  return ok;
}

export function logout() {
  window.sessionStorage.removeItem(KEY);
  notify();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useAuth() {
  return useSyncExternalStore(subscribe, isAuthenticated, () => false);
}
