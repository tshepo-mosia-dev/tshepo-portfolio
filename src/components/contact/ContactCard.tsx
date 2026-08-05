import type { ReactNode } from "react";

interface ContactCardProps {
    icon: ReactNode;
    title: string;
    value: string;
    href?: string;
}

const ContactCard = ({
    icon,
    title,
    value,
    href,
}: ContactCardProps) => {
    const content = (
        <div className="flex items-center gap-4 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold">{title}</h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {value}
                </p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
};

export default ContactCard;