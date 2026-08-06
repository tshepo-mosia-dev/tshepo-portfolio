import Button from "../ui/Button";
import { Download } from "lucide-react";

const AboutHero = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">About Me</h1>
            <p className="text-gray-400 mb-5">
                I'm an Information Systems student based in Cape Town, South Africa, with a passion for technology and innovation. My primary interest lies in software development, where I design and build systems that solve real-world problems.
            </p>

            <p className="text-gray-400 mb-5">
                Through my studies, I've also developed an interest in business analysis and data, which has given me a broader understanding of how technology supports organisations and decision-making.
            </p>

            <p className="text-gray-400 mb-7">
                I'm currently seeking entry-level opportunities. I'm open to remote, on-site, hybrid, and relocation opportunities.
            </p>
            <div className="flex flex-wrap gap-4">

                <a href="/tshepo-mosia-cv.pdf" download>
                    <Button variant="primary">
                        <span className="flex items-center gap-2">
                            Download CV
                            <Download size={18} />
                        </span>
                    </Button>
                </a>
            </div>
        </div>

    );
};

export default AboutHero;