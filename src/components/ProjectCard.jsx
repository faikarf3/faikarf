import { Link } from 'react-router-dom';



export default function ProjectCard({title, description, route, date, id}) {
    return (
        <Link to={route}>
            <div className='project' id={`project-${id}`}>
                <div   
                    className="project-content"

                    
                >
                    <h4>{title}</h4>
                    
                    <p> 
                        {description}    
                    </p>
                </div>
                <div className='project-date'><p>Date: {date}</p></div>
            </div>
        </Link>
    )
;}