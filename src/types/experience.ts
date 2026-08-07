import type { LucideIcon } from "lucide-react";

export interface ExperienceItem {
    title: string;
    organisation: string;
    period: string;
    location: string;
    description: string[];
    icon: LucideIcon;
}

export interface FocusItem {
    title: string;
    description: string;
    icon: LucideIcon;
}