import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiHtml5,
    SiPython,
    SiFastapi,
    SiMysql,
    SiSqlite,
    SiGit,
    SiGithub,
    SiJavascript,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Database } from "lucide-react";
import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
    {
        title: "Core Languages",
        skills: [
            { name: "Python", icon: SiPython, color: "text-yellow-500" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
            { name: "SQL", icon: Database, color: "text-sky-500" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, color: "text-sky-500" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
            { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Python", icon: SiPython, color: "text-yellow-500" },
            { name: "FastAPI", icon: SiFastapi, color: "text-green-500" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MySQL", icon: SiMysql, color: "text-yellow-500" },
            { name: "SQLite", icon: SiSqlite, color: "text-slate-500" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "text-orange-600" },
            { name: "GitHub", icon: SiGithub, color: "text-gray-700 dark:text-white" },
            {
                name: "VS Code",
                icon: BiLogoVisualStudio,
                color: "text-blue-500",
            },
        ],
    },

];