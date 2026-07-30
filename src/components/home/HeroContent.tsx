import { portfolio } from "../../data/portfolio";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { fadeLeft } from "../../animations/variants";
import { useTypewriter } from "../../hooks/useTypewriter";

const HeroContent = () => {
    const role = useTypewriter([
        "Aspiring Software Engineer",
        "Aspiring Data Engineer",
        "BCom Information Systems Student",
    ]);

    return (
        <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
        >
            <p className="text-lg font-medium text-blue-500">
                Hi, I'm
            </p>

            <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {portfolio.name}
                </h1>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-4 text-2xl font-semibold text-primary sm:text-3xl"
                >
                    {role}
                    <span className="animate-pulse">|</span>
                </motion.h2>
            </div>

            <div className="max-w-xl">
                <p className="mb-6 text-lg leading-8 text-slate-400">
                    {portfolio.heroDescription[0]}
                </p>

                <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 font-mono text-sm text-slate-300">
                    <code>
                        {portfolio.heroDescription.slice(2).join("\n")}
                    </code>
                </pre>
            </div>

            <HeroButtons />

            <SocialLinks />
        </motion.div>
    );
};

export default HeroContent;