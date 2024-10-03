import { SkillCard } from "../cmps/SkillCard";
import { AboutMe } from '../cmps/AboutMe';
import { useState } from "react";

export function Home() {
    const [selectedSkills, setSelectedSkills] = useState(false);
    return (
        <div className="home-page">
            <main className="home-container">
                <AboutMe />
                <div className="content">
                    <h2>Proficiencies</h2>
                    <button onClick={() => setSelectedSkills(!selectedSkills)}>Toggle Skills</button>
                    <div className="skills-list">
                        <SkillCard skill="react" />
                        <SkillCard skill="nodejs" />
                        <SkillCard skill="sass" />
                        <SkillCard skill="redux" />
                        <SkillCard skill="mongodb" />
                    </div>
                </div>
            </main>
        </div>
    );
}

