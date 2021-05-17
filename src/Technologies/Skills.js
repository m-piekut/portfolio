import useChangeTittle from '../components/useChangeLanguage';
import {ReactComponent as TittlePL} from './images/TECHNOLOGIE.svg'
import {ReactComponent as TittleEN} from './images/SKILLS.svg'
import SkillsAnimation from "./SkillsAnimation";


const Skills = () => {
    const {plVersion} = useChangeTittle()
    return ( 
        <div className="skills section">
            {plVersion ? <TittlePL className="pageTittle skills__tittle"/> : <TittleEN className="pageTittle skills__tittle"/>}
  
        <div className="skills__content content">
        <SkillsAnimation/>
        </div>
        </div>


     );
}
 
export default Skills;