import cv from '../assets/cv/cv.pdf'

export function AboutMe() {
    return (
        <section className="about-me-container">
            <h1>About Me</h1>
            <article className="about-me">
                <p>
                    I'm Ori Haguel, a Full Stack Developer with a passion for creating innovative solutions.
                    I'm a quick learner and a team player, always eager to take on new challenges and learn new technologies.
                </p>
                <a href={cv} className="download-cv-btn" download="Ori_Haguel_CV.pdf" aria-label="Download Ori Haguel's CV">Download CV</a>
            </article>
        </section>
    )
}