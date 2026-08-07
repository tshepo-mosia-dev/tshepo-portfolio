import type { ExperienceItem } from "../../types/experience";
import { CalendarDays, MapPin } from "lucide-react";

interface TimelineItemProps {
    item: ExperienceItem;
    isLast?: boolean;
}

const TimelineItem = ({ item, isLast = false }: TimelineItemProps) => {
    const Icon = item.icon;

    return (
        <div className="relative flex gap-8">
            {/* Timeline */}
            <div className="flex w-16 flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-blue-600">
                    <Icon size={26} />
                </div>

                {!isLast && (
                    <div className="mt-2 h-full w-0.5 flex-1 bg-blue-200" />
                )}
            </div>

            {/* Card */}
            <div className="mb-14 flex-1 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                    {/* Left */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-lg font-medium text-blue-600">
                            {item.organisation}
                        </p>

                        <div className="flex items-center gap-2 text-gray-500">
                            <CalendarDays size={18} />

                            <span>{item.period}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={18} />

                            <span>{item.location}</span>
                        </div>
                    </div>

                    {/* Right */}
                    <ul className="space-y-3 lg:max-w-md">
                        {item.description.map((point) => (
                            <li
                                key={point}
                                className="flex gap-3 text-gray-600 dark:text-gray-400"
                            >
                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;