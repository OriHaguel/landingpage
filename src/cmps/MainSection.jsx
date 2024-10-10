import { motion } from 'framer-motion';

export function MainSection() {
    return (
        <motion.section
            className="main-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="content-wrapper">
                <motion.div
                    className="text-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h1 className="name">Ori Haguel</h1>
                    <h2 className="title">Full Stack Developer</h2>
                </motion.div>
                <motion.div
                    className="cta-buttons"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a href="#projects" className="custom-button default">View Portfolio</a>
                    <a href="#contacts" className="custom-button outline">Contact Me</a>
                </motion.div>
            </div>
        </motion.section>
    );
}