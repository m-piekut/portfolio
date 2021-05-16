
import {ReactComponent as ProjektText} from './images/PROJEKTY.svg'
import ProjectsAnimations from "./ProjectsAnimation";

import ProjectsCards from "./ProjectsCards"

const Projects = () => {
    return ( 
        <div className="projects section">
            <ProjektText className="pageTittle"/>
            <div className="projects__content content">

            <ProjectsAnimations/>
            <ProjectsCards/>
            </div>
            
        </div>

     );
}
 
export default Projects;