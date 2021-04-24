import {ReactComponent as SkillsText} from './images/TECHNOLOGIE.svg'
import SkillsAnimation from "./SkillsAnimation";


const Skills = () => {
    return ( 
        <div className="skills section">
        <SkillsText className="pageTittle skills__tittle"/>
        <div className="projects__content">
        <SkillsAnimation/>
        </div>
        </div>


     );
}
 
export default Skills;