import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const Contact = () => {
  return (
    <Section className="pt-10 pb-10">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Side */}
          <div className="space-y-10">
            <ContactHero />
            <ContactInfo />
          </div>

          {/* Right Side */}
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default Contact;