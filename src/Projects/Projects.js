import useChangeTittle from '../components/useChangeLanguage';
import {ReactComponent as TittlePL} from './images/PROJEKTY.svg'
import {ReactComponent as TittleEN} from './images/WORK.svg'
import ProjectsAnimations from "./ProjectsAnimation";

import ProjectsCards from "./ProjectsCards"

const Projects = () => {
  const {plVersion} = useChangeTittle()

    return ( 
        <div className="projects section">
            {plVersion ? <TittlePL className="pageTittle"/> : <TittleEN className="pageTittle"/>}
            
            <div className="projects__content content">

            <ProjectsAnimations/>
            <ProjectsCards/>
            </div>
            
        </div>

     );
}
 
export default Projects;