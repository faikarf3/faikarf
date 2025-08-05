import { Link } from 'react-router-dom';



export default function ProjectCard({title, description, route, date}) {

    return (
        <Link to={route}>
            <div className='project'>
                <div   
                    className="project-content"

                    
                >
                    <h4>{title}</h4>
                    <p>Date: {date}</p>
                    <p> 
                        {description}    
                    </p>
                </div>
            </div>
        </Link>
    )
;}