import { useEffect } from 'react';
import { SkillCard } from "../cmps/SkillCard";
import { AboutMe } from '../cmps/AboutMe';
import { MyProjects } from "../cmps/MyProjects";
import { FormMsg } from "../cmps/FormMsg";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sky from "../assets/img/sky.png"
import secondSky from "../assets/img/sky2.jpg"
import { MainSection } from '@/cmps/MainSection';

export function Home() {
    const { scrollY } = useScroll();
    const skyY = useTransform(scrollY, [0, 3000], [0, 50]);
    const secondSkyY = useTransform(scrollY, [0, 3000], [0, -50]);

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const skillsData = [
        { skill: "React", txt: 'Proficient in building dynamic UIs with React, leveraging its component-based architecture for efficient and maintainable code.' },
        { skill: "Nodejs", txt: 'Experienced in server-side JavaScript, using Node.js to create scalable and high-performance backend applications.' },
        { skill: "Sass", txt: 'Skilled in writing clean and organized CSS with Sass, utilizing its powerful features for more maintainable stylesheets.' },
        { skill: "Redux", txt: 'Adept at managing complex application state with Redux, ensuring predictable data flow in large-scale React applications.' },
        { skill: "Mongodb", txt: 'Proficient in working with MongoDB, designing efficient NoSQL database schemas and integrating them with Node.js applications.' },
        { skill: "Git", txt: 'Experienced in version control with Git, facilitating collaborative development and maintaining code integrity across projects.' },
    ];

    const container = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="home-page relative overflow-hidden">
            <motion.div
                className="fixed inset-0 w-full h-full z-0"
                style={{
                    y: secondSkyY,
                    backgroundImage: `url(${secondSky})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <motion.div
                className="fixed inset-0 w-full h-full z-0"
                style={{
                    y: skyY,
                    backgroundImage: `url(${sky})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <main className="home-container relative z-20">
                <MainSection />
                <AboutMe />
                <div className="content">
                    <h2 className="proficiencies-title" id="Technologies">Technologies</h2>
                    <motion.div
                        ref={ref}
                        className="skills-list"
                        variants={container}
                        initial="hidden"
                        animate={controls}
                    >
                        {skillsData.map((skillData, index) => (
                            <SkillCard
                                key={skillData.skill}
                                skill={skillData.skill}
                                txt={skillData.txt}
                                animationDirection={index >= 3 ? index - 3 : index % 4}
                            />
                        ))}
                    </motion.div>
                    <MyProjects />
                    <FormMsg />
                </div>
            </main>
        </div>
    );
}

