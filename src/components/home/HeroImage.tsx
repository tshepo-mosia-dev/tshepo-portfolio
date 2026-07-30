import profile from "../../assets/images/profile.jpeg";
import AvailabilityCard from "./AvailabilityCard";
import { motion } from "framer-motion";
import { fadeRight } from "../../animations/variants";

const HeroImage = () => {
    return (
        <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-end"
        >

            {/* Blue Glow */}
            <div className="absolute h-107.5 w-107.5 rounded-full bg-primary/20 blur-3xl" />

            {/* Image Container */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative h-105 w-105 overflow-hidden rounded-full border border-border bg-surface shadow-2xl"
            >
                <img
                    src={profile}
                    alt="Tshepo Mosia"
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Availability Card */}
            <AvailabilityCard />
        </motion.div>
    );
};

export default HeroImage;