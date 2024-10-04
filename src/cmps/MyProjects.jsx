import gig from "../assets/img/gig.png"
import gmail from "../assets/img/gmail.png"
// import gig from "../assets/img/gig.png"

export function MyProjects() {
    return (
        <section className="my-projects-container">
            <h1>My Projects</h1>
            <div className="projects-wrapper">
                <div className="project-container">
                    <a href="https://gighub-q0xb.onrender.com" target="_blank">
                        <img src={gig} alt="GigHub Project" />
                    </a>
                </div>
                <div className="project-container">
                    <a href="https://gmail-bht4.onrender.com/?subject=&isRead=" target="_blank">
                        <img src={gmail} alt="Gmail Project" />
                    </a>
                </div>
            </div>
        </section>
    )
}