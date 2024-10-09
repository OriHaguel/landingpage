import React, { useEffect } from 'react';
import { SkillCard } from "../cmps/SkillCard";
import { AboutMe } from '../cmps/AboutMe';
import { MyProjects } from "../cmps/MyProjects";
import { FormMsg } from "../cmps/FormMsg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Home() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
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
        { skill: "react", txt: 'Proficient in building dynamic UIs with React, leveraging its component-based architecture for efficient and maintainable code.' },
        { skill: "nodejs", txt: 'Experienced in server-side JavaScript, using Node.js to create scalable and high-performance backend applications.' },
        { skill: "sass", txt: 'Skilled in writing clean and organized CSS with Sass, utilizing its powerful features for more maintainable stylesheets.' },
        { skill: "redux", txt: 'Adept at managing complex application state with Redux, ensuring predictable data flow in large-scale React applications.' },
        { skill: "mongodb", txt: 'Proficient in working with MongoDB, designing efficient NoSQL database schemas and integrating them with Node.js applications.' },
        { skill: "Git", txt: 'Experienced in version control with Git, facilitating collaborative development and maintaining code integrity across projects.' },
    ];

    const container = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            <main className="home-container">
                <AboutMe />
                <div className="content">
                    <h2 className="proficiencies-title" id="proficiencies">Proficiencies</h2>
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

