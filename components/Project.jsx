import Projects from './Projects';
import projectDetails from '../projectDetails.json';

const Project = () => {
    return (
        <div className='mt-12' id="projects">
            <h2 className='grad'>Projects</h2>
            <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4'>
                {projectDetails.map((project)=>(
                    <Projects key={project.number} image={project.image} title={project.title} href1={project.href1} href2={project.href2} desc={project.desc} tech={project.tech}/>
    
                ))}
            </div>
        </div>
    )
}

export default Project
