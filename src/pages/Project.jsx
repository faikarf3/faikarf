import { useParams } from 'react-router-dom';

const experiences = [
        {
            title: "InFRIENDtory",
            date: "May 2025",
            desc: `InFRIENDtory is a bartering app that lets users trade used furniture or pretty much anything, and it’s designed with college students in mind. It actually started as a hackathon project under the name FridgeFriends, where the original idea was to help reduce food waste by allowing people to trade extra food instead of throwing it out.
                     But as our team discussed it more, we felt the concept could be broader—so we turned it into InFRIENDtory, opening it up for all kinds of item trading. 
                    This was my very first hackathon (shoutout to HunterHacks), and honestly, it was such a new and exciting experience. We ended up winning Best Sustainability, which was a huge bonus!
                    One of the first big challenges was just deciding what to build. We wanted something meaningful but also small enough to finish in three days. A bartering app seemed like the perfect balance—it tackled a real-world issue (food waste) and gave us the chance to learn new tech like app development and relational databases.
                    We chose to build it with Next.js, which none of us had used before, so it was a great opportunity to learn something new. My friend Kris and I focused on the app development side, while our other two teammates handled UI/UX design and project management. For the backend and database, we went with Supabase since the logic was pretty simple and we needed something we could realistically finish within the hackathon timeline.
                    We designed the database schema from scratch—my first time ever doing that—and built a working app connected to it. It was a super fun experience overall, and I also got to see what other teams built, which honestly taught me a lot too.`
        },
    ]


export default function Project() {
    const { id } = useParams();
    const index = parseInt(id, 10);

    const experience = experiences[index]

    if (isNaN(index) || !experience) {
        return <h2>Under Construction🔨</h2>
    }

  return (
    <div className="project-detail">
      <h1>{experience.title}</h1>
      <p><strong>Date:</strong> {experience.date}</p>
      <p>{experience.desc}</p>
    </div>
    
    );
}
