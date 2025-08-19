import ProjectCard from "../components/ProjectCard"
import EmailField from "../components/EmailField";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'
import linkedinlogo from '../assets/images/linkedin.png';
import githublogo from '../assets/images/github.png'
import faikarImage from '../assets/images/faikar.jpg'
import soundcloudlogo from '../assets/images/soundcloud.png'

export default function Home() {
    const projects = [
    {
    title: 'Reading Knack',
    description: 'A full-stack web application for uploading, reading, and quizzing over reading passages',
    date: 'June 2025 - Present',
    id: 7,
    },
    {
    title: 'CUNY Tech Prep Fellowship',
    description: 'Part of Cohort 11 of CUNY Tech Prep. Creating projects together and technical interview prep',
    date: 'May 2025 - Present',
    id: 6,

  },
  {
    title: 'InFRIENDtory',
    description: 'Created a bartering app designed to reduce product waste. Won best sustainabilty in HunterHacks',
    date: 'May 2025',
    id: 5,
  },
  {
    title: 'Treasury Analyst Intern',
    date: 'Jun - Aug 2024',
    description: 'Interned in a Bank as a Treasury Analyst in BRI New York',
    id: 4,


  },
  {
    title: 'Supplemental Instructor',
    date: 'Aug 2023 - Present',
    description: 'Teach and guide college students to understand better of their class materials',
    id: 3,

  },
  {
    title: 'Web Dev Intern',
    date: 'Jun - Aug 2023',
    description: 'Interned as a frontend developer in TheRICC, a journal company',
    id: 2,

  },
  
  {
    title: 'Gamma Ray Detector Research',
    date: 'Feb - Apr 2023',
    description: 'Reseached in Gamma Rays using Arduino and Electronics',
    id: 1,

  },
];

    return (
        <>
            <section>
                <h2>
                Hi, I'm Faikar!
                </h2>
                <img 
                    src={faikarImage} 
                    alt="Faikar" 
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '20px 0',
                        border: '3px solid #A31D1D'
                    }}
                />
                <p>
                I'm a Computer Science student in Hunter College with a passion for software engineering. 
                I’m always happy to join more group projects to sharpen my skills and learn from others. 
                I also teach physics, which keeps me sharp in problem-solving, and write songs as a creative outlet. 
                I'm always open to learn new things in various fields <strong>because as humans we should always strive to learn more!</strong>
                </p>
            </section>
            <section className="experiences">
              <h3 style={{ borderBottom: '1px solid #A31D1D'}}>Experiences</h3>
              <div className="experience-list">
                  {projects.map((proj) => (
                  <ProjectCard
                  key={proj.id}
                  title={proj.title}
                  date={proj.date}
                  description={proj.description}
                  route={`/experience/${proj.id}`}
                  id={proj.id}
                  />
                  ))}
              </div>
            </section>
            <section className="contact">
                <h3 style={{ borderBottom: '1px solid #A31D1D'}}>Contact</h3>
                <p>I'm always open to new projects and opportunities! Please reach out to me below. Oh, and also check out my music on soundcloud!</p>
                <div className="contact-links">
                    <EmailField/>
                    <a href="https://www.linkedin.com/in/faikar-fazazaman" target="linkedin" className="logo-container"><img className="contact-link-linkedin"src={linkedinlogo} alt="LinkedIn"></img></a>
                    <a href="https://github.com/faikarf3" target="linkedin" className="logo-container"><img className="contact-link-github"src={githublogo} alt="Github"></img></a>
                    <a href="https://soundcloud.com/runaway-computer" target="linkedin" className="logo-container"><img className="contact-link-soundcloud"src={soundcloudlogo} alt="SoundCloud"></img></a>
                </div>
            </section>
            
        </>
    )
}