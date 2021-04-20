import ProjectsInfo from './ProjectsInfo'
// import Icons from '../components/Icons'


const ProjectsCards = () => {
    return ( 
        <div className="projects__cards">

            {ProjectsInfo.map((card) =>(
                <div className="projects__cardWrapper" key={card.id}>
                    <div className="projects__infoCard">
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
                        <a href={card.live}><button className="fas fa-eye projects__button projects__button--live"></button></a>
                        <a href={card.code}><button className="fab fa-github projects__button projects__button--git"></button></a>
                        <div className="projects__buttonsLeft"></div>
                    </div>
                </div>
            ))}
        </div>





     );
}
 
export default ProjectsCards;