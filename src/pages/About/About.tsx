import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import AboutHero from "../../components/about/AboutHero";
import Skills from "../../components/about/Skills";

const About = () => {
    return (
        <Section>
            <Container>
                <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:items-start">
                    <div>
                        <AboutHero />
                    </div>
                    <Skills />
                </div>

            </Container>
        </Section>
    );
};

export default About;