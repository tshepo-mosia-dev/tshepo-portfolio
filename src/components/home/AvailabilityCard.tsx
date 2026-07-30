import { MapPin } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { motion } from "framer-motion";

const AvailabilityCard = () => {
    return (
        <div className="absolute -bottom-4 -left--1 rounded-2xl border border-border bg-background p-4 text-center shadow-xl">
            <div className="flex items-center gap-2">
                <motion.span
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    className="h-3 w-3 rounded-full bg-green-500"
                />

                <span className="text-sm font-medium">
                    {portfolio.availability}
                </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} />
                {portfolio.location}
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
                {portfolio.workPreference.map((preference) => (
                    <span
                        key={preference}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                        {preference}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default AvailabilityCard;