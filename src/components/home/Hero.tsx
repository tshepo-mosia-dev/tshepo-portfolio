import Container from "../ui/Container";
import Section from "../ui/Section";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

<motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
>
    ...
</motion.div>

const Hero = () => {
    return (
        <Section className="min-h-screen flex items-center">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />
                    <HeroImage />
                </div>
            </Container>
        </Section>
    );
};

export default Hero;