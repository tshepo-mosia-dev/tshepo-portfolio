import {
    Briefcase,
    GraduationCap,
    Code2,
    Atom,
    Braces,
    Database,
    Cpu,
    Accessibility,
} from "lucide-react";

import type {
    ExperienceItem,
    FocusItem,
} from "../types/experience";

export const experienceItems: ExperienceItem[] = [
    {
        title: "BCom Information Systems",
        organisation: "University of the Western Cape",
        period: "2025 – 2027",
        location: "Cape Town, South Africa",
        icon: GraduationCap,
        description: [
            "Coding: Building application logic for enterprise business needs.",
            "Data: Designing, implementing, and managing secure databases.",
            "Analysis: Translating complex business problems into technical blueprints.",
            "Machine Learning: Applying algorithms to automate business decisions.",
        ],
    },
    {
        title: "Customer Service Advisor",
        organisation: "Seraph Investments (K-Stay Student Accommodation)",
        period: "Apr 2022 – Feb 2025",
        location: "Johannesburg, South Africa",
        icon: Briefcase,
        description: [
            "Acted as the primary liaison between tenants and management.",
            "Resolved customer enquiries efficiently.",
            "Coordinated facilities' maintenance requests.",
            "Supported recruitment and onboarding processes for new tenants.",
            "Overall customer service satisfaction duties.",
        ],
    },
];

export const currentFocus: FocusItem[] = [
    {
        title: "React",
        description: "Building modern interfaces.",
        icon: Atom,
    },
    {
        title: "TypeScript",
        description: "Writing safer applications.",
        icon: Braces,
    },
    {
        title: "FastAPI",
        description: "Developing backend APIs.",
        icon: Code2,
    },
    {
        title: "Databases",
        description: "Designing efficient data models.",
        icon: Database,
    },
    {
        title: "Accessibility",
        description: "Building inclusive experiences.",
        icon: Accessibility,
    },
    {
        title: "System Design",
        description: "Learning scalable architecture.",
        icon: Cpu,
    },
];