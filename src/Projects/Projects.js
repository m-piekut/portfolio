import PageTittle from "../components/PageTittlle"
import {ReactComponent as ProjektText} from './images/PROJEKTY.svg'
import {ReactComponent as Scene} from './images/projects.svg'
import ProjectsCards from "./ProjectsCards"

const Projects = () => {
    return ( 
        <div className="projects section">
            {/* <PageTittle tittle ="projekty"/> */}
            <ProjektText className="pageTittle"/>
            <Scene/>
            <ProjectsCards/>


            
        </div>

     );
}
 
export default Projects;