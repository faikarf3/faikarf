import { useParams } from 'react-router-dom';

const experiences = [
    {
        id: 7,
        title: "Reading Knack",
        heading: "PYE Education Center",
        date: "June 2025 - Present",
        desc: `ReadingKnack is a web application developed for the PYE Education Center to help students and teachers practice reading comprehension. Built with Django, React, PostgreSQL, and a REST API, the project was developed by a team of five—three members focusing on the backend and two on the frontend. 
        My primary role was on the backend, where I gained valuable experience in REST API development and backend management, which involves tasks such as setting up and maintaining the server, 
        managing databases, ensuring data security, optimizing performance, and integrating the backend with the frontend. I also contributed to the frontend to help improve the overall structure and functionality of the application.`

  },
    {
        id: 6,
        title: "CUNY Tech Prep Fellowship",
        date: "May 2025 - Present",
        desc: "I am part of Cohort 11 of CUNY Tech Prep, a fellowship focused on building projects collaboratively and preparing for technical interviews. This program has been instrumental in enhancing my technical skills and equipping me for software engineering roles. Through CTP, I participated in their hackathon and is currently in their web development course, gaining both practical experience and deeper knowledge in the field.."
    },
    {
        id: 5,
        title: "InFRIENDtory",
        heading: "HunterHacks 2025",
        date: "May 2025",
        desc: `InFRIENDtory is a bartering app that lets users trade used furniture or pretty much anything, and it's designed with college students in mind. It actually started as a hackathon project under the name FridgeFriends, where the original idea was to help reduce food waste by allowing people to trade extra food instead of throwing it out.
                     But as our team discussed it more, we felt the concept could be broader—so we turned it into InFRIENDtory, opening it up for all kinds of item trading. 
                    This was my very first hackathon (shoutout to HunterHacks), and honestly, it was such a new and exciting experience. We ended up winning Best Sustainability, which was a huge bonus!
                    One of the first big challenges was just deciding what to build. We wanted something meaningful but also small enough to finish in three days. A bartering app seemed like the perfect balance—it tackled a real-world issue (food waste) and gave us the chance to learn new tech like app development and relational databases.
                    We chose to build it with Next.js, which none of us had used before, so it was a great opportunity to learn something new. My friend Kris and I focused on the app development side, while our other two teammates handled UI/UX design and project management. For the backend and database, we went with Supabase since the logic was pretty simple and we needed something we could realistically finish within the hackathon timeline.
                    We designed the database schema from scratch—my first time ever doing that—and built a working app connected to it. It was a super fun experience overall, and I also got to see what other teams built, which honestly taught me a lot too.`,
        link: "https://fridge-friends.vercel.app/",         },
        
    {
        id: 4,
        title: "Treasury Analyst Intern",
        date: "Jun - Aug 2024",
        desc: "Interned in a Bank as a Treasury Analyst in BRI New York. This experience provided valuable insights into financial systems and corporate operations."
    },
    {
        id: 3,
        title: "Supplemental Instructor",
        date: "Aug 2023 - Present",
        desc: "Teach and guide college students to understand better of their class materials. This role has helped me develop strong communication and teaching skills."
    },
    {
        id: 2,
        title: "Web Dev Intern",
        date: "Jun - Aug 2023",
        desc: "Interned as a frontend developer in TheRICC, a journal company. This internship provided hands-on experience with modern web development technologies."
    },
    {
        id: 1,
        title: "Gamma Ray Detector Research",
        date: "Feb - Apr 2023",
        desc: "Researched in Gamma Rays using Arduino and Electronics. This project combined my interests in physics and technology, demonstrating my ability to work on interdisciplinary projects."
    }
]

export default function Project() {
    const { id } = useParams();
    const projectId = parseInt(id, 10);

    const experience = experiences.find(exp => exp.id === projectId);

    if (!experience) {
        return <h2>Under Construction🔨</h2>;
    }

    return (
        <section className="project-detail">
            <h1>{experience.title}</h1>
            <h3> {experience.heading}</h3>
            <a href={experience.link} alt="InFRIENDtory"><p>{experience.link}</p></a>
            <p><strong>Date:</strong> {experience.date}</p>
            <p>{experience.desc}</p>
        </section>
    );
}
