import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectsInfo from './ProjectsInfo'



const ProjectsCards = () => {

    const [content, setContent] = useState(  )
    const {value} = useSelector(state=> state.language)


    useEffect(()=>{
        value === 'PL' ? setContent(ProjectsInfo.PL) : setContent(ProjectsInfo.EN) 
    },[value])



    return ( 
        <div className="projects__cards">

            {content && content.map((card) =>(
                <div className="projects__cardWrapper" key={card.id}>
                    <div tabIndex="1"  className="projects__infoCard">
                        <h2 className="projects__tittle">{card.name}</h2>
                        <p className="projects__info">{card.info}</p>
                        <div className="projects__icons">
                        {card.icons.map((icon)=>(
                           <i className={icon.code + " projects__icon"} key={icon.id}></i>
                        ))}
                        </div>
                    </div>
                    <div className="projects__imageWrapper">
                        <img className="projects__cardImg" src={card.image} alt=""/>
                    </div>
                    <div className="projects__buttons">
                        <a target="_blank"  rel="noreferrer" href={card.live}><button className="fas fa-eye projects__button projects__button--live"></button></a>
                        <a target="_blank"  rel="noreferrer" href={card.code}><button className="fab fa-github projects__button projects__button--git"></button></a>
                        <div className="projects__buttonsLeft"></div>
                    </div>
                </div>
            ))}
        </div>





     );
}
 
export default ProjectsCards;