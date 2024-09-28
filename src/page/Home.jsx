import React from 'react';
import { SkillCard } from "../cmps/SkillCard";
import { AboutMe } from '../cmps/AboutMe';

export function Home() {
    return (
        <div className="home-page">
            <main className="home-container">
                <AboutMe />
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

