import { Link } from 'react-router-dom';



export default function ProjectCard({title, description, image, route, date}) {

    return (
        <Link to={route}>
            <div className='project'>
                <div   
                    className="project-content"

                    
                >
                    <img src={image} className="project-img">
                    </img>
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