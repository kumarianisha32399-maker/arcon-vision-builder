import {
  Award,
  Briefcase,
  Building2,
  ClipboardList,
  Eye,
  Home,
  Landmark,
  Map,
  Route as RouteIcon,
  ShieldCheck,
  Star,
  type LucideProps,
} from "lucide-react";

const MAP = {
  building: Building2,
  home: Home,
  briefcase: Briefcase,
  landmark: Landmark,
  clipboard: ClipboardList,
  route: RouteIcon,
  award: Award,
  shield: ShieldCheck,
  map: Map,
  eye: Eye,
  star: Star,
} as const;

export type IconName = keyof typeof MAP;
export const ICON_NAMES = Object.keys(MAP) as IconName[];

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Comp = MAP[(name as IconName) in MAP ? (name as IconName) : "building"];
  return <Comp strokeWidth={1.5} {...props} />;
}
