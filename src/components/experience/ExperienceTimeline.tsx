import { experienceItems } from "../../data/experience";
import TimelineItem from "./TimelineItem";

const ExperienceTimeline = () => {
    return (
        <section className="my-3">
            <div className="mb-12">
                <h2 className="text-4xl font-bold">
                    Experience & Education
                </h2>

                <p className="mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
                    My journey combines previous professional work, academic study, and continuous growth in technology, shaping my path as an IT and Business Professional.
                </p>
            </div>

            <div>
                {experienceItems.map((item, index) => (
                    <TimelineItem
                        key={item.title}
                        item={item}
                        isLast={index === experienceItems.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;