import ProjectCard from "../components/ProjectCard"
import img1 from '../assets/images/infriendtory.png'

export default function Home() {
    const projects = [
    {
    title: 'Reading Knack',
    description: 'A full-stack web application for uploading, reading, and quizzing over reading passages',
    date: 'June 2025 - Present',
    },
    {
    title: 'CUNY Tech Prep Fellowship',
    description: 'Part of Cohort 11 of CUNY Tech Prep. Creating projects together and technical interview prep',
    date: 'May 2025 - Present',

  },
  {
    title: 'InFRIENDtory',
    description: 'Created a bartering app designed to reduce product waste. Won best sustainabilty in HunterHacks',
    date: 'May 2025',
    image: img1,
  },
  {
    title: 'Treasury Analyst Intern',
    date: 'Jun - Aug 2024',
    description: 'Interned in a Bank as a Treasury Analyst in BRI New York',


  },
  {
    title: 'Supplemental Instructor',
    date: 'Aug 2023 - Present',
    description: 'Teach and guide college students to understand better of their class materials',

  },
  {
    title: 'Web Dev Intern',
    date: 'Jun - Aug 2023',
    description: 'Interned as a frontend developer in TheRICC, a journal company',

  },
  
  {
    title: 'Gamma Ray Detector Research',
    date: 'Feb - Apr 2023',
    description: 'Reseached in Gamma Rays using Arduino and Electronics',

  },
];

    return (
        <div>
            <div>
                <h2>
                Hi, I'm Faikar!
                </h2>
                <p>
                I'm a Computer Science student in Hunter College with a passion for software engineering. 
                I’m always happy to join more group projects to sharpen my skills and learn from others. 
                I also teach physics, which keeps me sharp in problem-solving, and write songs as a creative outlet. 
                I'm always open to learn new things in various fields <strong>because as humans we should always strive to learn more!</strong>
                </p>
            </div>
            <h3>Latest Updates</h3>
            <div className="experiences">
                {projects.map((proj, index) => (
                <ProjectCard
                key={index}
                title={proj.title}
                date={proj.date}
                description={proj.description}
                image={proj.image}
                route={`/experience-${index}`}
                />
                ))}
            </div>
            <div className="contact">
                
            </div>
        </div>
    )
}