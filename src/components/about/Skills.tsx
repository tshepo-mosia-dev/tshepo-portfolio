import { skillCategories } from "../../data/skills";

const Skills = () => {
    return (
        <section>
            <div className="mb-8 text-left">
                <h2 className="text-2xl font-bold">
                    Technical Skills
                </h2>

            </div>

            <div className="space-y-12 grid lg:grid-cols-3 lg:items-start">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="mb-6 font-semibold">
                            {category.title}
                        </h3>

                        <div className="space-y-4">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                    >
                                        <div className="flex flex-row items-center gap-5">
                                            <Icon className={`text-3xl ${skill.color}`} />

                                            <span className="font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;