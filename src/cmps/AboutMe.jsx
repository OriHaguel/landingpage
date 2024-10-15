import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cv from '../assets/cv/cv.pdf';

export function AboutMe() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { y: 50 },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            className="about-me-container"
            id="about"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            <h1 className='main-title'>About Me</h1>
            <article className="about-me">
                <p>
                    I'm Ori Haguel, a Full Stack Developer with a passion for creating innovative solutions.
                    I'm a quick learner and a team player, always eager to take on new challenges and learn new technologies.
                </p>
                <div className="cta-container">
                    <a href={cv} className="download-cv-btn" download="Ori_Haguel_CV.pdf" aria-label="Download Ori Haguel's CV">Download CV</a>
                </div>
            </article>
        </motion.section>
    )
}