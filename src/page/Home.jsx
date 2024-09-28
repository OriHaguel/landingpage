import React from 'react';
import { SkillCard } from "../cmps/SkillCard";


export function Home() {
    return (
        <div className="home-page">
            <main className="home-container">
                <div className="content">
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

