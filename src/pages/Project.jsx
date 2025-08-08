import { useParams } from 'react-router-dom';

const experiences = [
    {
        id: 7,
        title: "Reading Knack",
        date: "June 2025 - Present",
        desc: "A full-stack web application for uploading, reading, and quizzing over reading passages. This project demonstrates my skills in modern web development and user experience design."
    },
    {
        id: 6,
        title: "CUNY Tech Prep Fellowship",
        date: "May 2025 - Present",
        desc: "Part of Cohort 11 of CUNY Tech Prep. Creating projects together and technical interview prep. This fellowship has been instrumental in developing my technical skills and preparing for software engineering roles."
    },
    {
        id: 5,
        title: "InFRIENDtory",
        date: "May 2025",
        desc: `InFRIENDtory is a bartering app that lets users trade used furniture or pretty much anything, and it's designed with college students in mind. It actually started as a hackathon project under the name FridgeFriends, where the original idea was to help reduce food waste by allowing people to trade extra food instead of throwing it out.
                     But as our team discussed it more, we felt the concept could be broader—so we turned it into InFRIENDtory, opening it up for all kinds of item trading. 
                    This was my very first hackathon (shoutout to HunterHacks), and honestly, it was such a new and exciting experience. We ended up winning Best Sustainability, which was a huge bonus!
                    One of the first big challenges was just deciding what to build. We wanted something meaningful but also small enough to finish in three days. A bartering app seemed like the perfect balance—it tackled a real-world issue (food waste) and gave us the chance to learn new tech like app development and relational databases.
                    We chose to build it with Next.js, which none of us had used before, so it was a great opportunity to learn something new. My friend Kris and I focused on the app development side, while our other two teammates handled UI/UX design and project management. For the backend and database, we went with Supabase since the logic was pretty simple and we needed something we could realistically finish within the hackathon timeline.
                    We designed the database schema from scratch—my first time ever doing that—and built a working app connected to it. It was a super fun experience overall, and I also got to see what other teams built, which honestly taught me a lot too.`
    },
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
        <div className="project-detail">
            <h1>{experience.title}</h1>
            <p><strong>Date:</strong> {experience.date}</p>
            <p>{experience.desc}</p>
        </div>
    );
}
