import { portfolio } from "../../data/portfolio";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
    return (
        <div className="space-y-8">
            <p className="text-lg font-medium text-blue-500">
                Hi, I'm 👋
            </p>

            <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {portfolio.name}
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-slate-300">
                    {portfolio.role}
                </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-400">
                {portfolio.heroDescription}
            </p>

            <HeroButtons />

            <SocialLinks />
        </div>
    );
};

export default HeroContent;