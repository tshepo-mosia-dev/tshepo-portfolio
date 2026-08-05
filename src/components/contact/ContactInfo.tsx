import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContactCard from "./ContactCard";

const ContactInfo = () => {
    return (

            <div className="space-y-6">
                <ContactCard
                    icon={<FaEnvelope size={22} />}
                    title="Email"
                    value="tmosia216@gmail.com"
                    href="mailto:tmosia216@gmail.com"
                />

                <ContactCard
                    icon={<FaLinkedin size={22} />}
                    title="LinkedIn"
                    value="linkedin.com/in/tshepo-mosia"
                    href="https://linkedin.com/in/tshepo-mosia"
                />

                <ContactCard
                    icon={<FaGithub size={22} />}
                    title="GitHub"
                    value="github.com/tshepo-mosia-dev"
                    href="https://github.com/tshepo-mosia-dev"
                />

                <ContactCard
                    icon={<FaMapMarkerAlt size={22} />}
                    title="Location"
                    value="Cape Town, South Africa"
                />
            </div>

    );
};

export default ContactInfo;