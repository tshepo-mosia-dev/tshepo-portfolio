import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = ({
    children,
    className = "",
}: SectionProps) => {
    return (
        <section className={`py-10 ${className}`}>
            {children}
        </section>
    );
};

export default Section;