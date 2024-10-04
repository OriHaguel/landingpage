import { SkillCard } from "../cmps/SkillCard";
import { AboutMe } from '../cmps/AboutMe';
import { useState } from "react";
import { MyProjects } from "../cmps/MyProjects";
export function Home() {
    return (
        <div className="home-page">
            <main className="home-container">
                <AboutMe />
                <div className="content">
                    <h2 className="proficiencies-title">Proficiencies</h2>
                    <div className="skills-list">
                        <SkillCard skill="react" txt={'Proficient in building dynamic UIs with React, leveraging its component-based architecture for efficient and maintainable code.'} />
                        <SkillCard skill="nodejs" txt={'Experienced in server-side JavaScript, using Node.js to create scalable and high-performance backend applications.'} />
                        <SkillCard skill="sass" txt={'Skilled in writing clean and organized CSS with Sass, utilizing its powerful features for more maintainable stylesheets.'} />
                        <SkillCard skill="redux" txt={'Adept at managing complex application state with Redux, ensuring predictable data flow in large-scale React applications.'} />
                        <SkillCard skill="mongodb" txt={'Proficient in working with MongoDB, designing efficient NoSQL database schemas and integrating them with Node.js applications.'} />
                        <SkillCard skill="Git" txt={'Experienced in version control with Git, facilitating collaborative development and maintaining code integrity across projects.'} />
                    </div>
                    <MyProjects />
                </div>
            </main>
        </div>
    );
}

