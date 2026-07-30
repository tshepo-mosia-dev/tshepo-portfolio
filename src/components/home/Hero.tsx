import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "./HeroBackground";


const Hero = () => {
    return (
        <section className="relative flex min-h-[calc(100vh-10px)] items-center overflow-hidden">
            <HeroBackground />
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />
                    <HeroImage />
                </div>
            </Container>
        </section>
    );
};

export default Hero;