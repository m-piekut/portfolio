import PageTittle from "../components/PageTittlle"
import photo from '../images/photo.png'
const AboutMe = () => {
    return ( 
        <div className="aboutMe">
            <div className="aboutMe__tittleWrapper drop test">
                <h1 className="aboutMe__tittle"> Cześć,<br/> Jestem Marek <br/>  Frontend-Developer </h1>
                <div className="aboutMe__circleWrapper">
                    <div className="aboutMe__circle inner darkColor"></div>
                    <div className="aboutMe__circle drop technologyColor"></div>
                    <div className="aboutMe__circle inner contactColor"></div>
                </div>
            </div>
            <div className="aboutMe__text inner">
                <p>Interesuję się programowaniem od około dwóch lat.
                    Od dawna również interesuję się aplikacjami webowymi. Chciałbym zostać frontend developerem ponieważ taki rodzaj pracy bardzo mi odpowiada. Podczas kodowania udaje mi się uzyskać zjawisko "przepływu", podczas którego 3 godziny odczuwam jak 30 minut. Obecnie opanowałem w zadowalającym stopniu: HTML, CSS/SCSS, BEM, JavaScript oraz uczę się Reacta. Staram codziennie się rozwijać i stawać się lepszym. Moje umiejętności miękkie, przez to, że jestem nauczycielem są dobrze rozwinięte.
                </p>
                <a href="https://github.com/m-piekut" target="_blank" className="aboutMe__git">Mój GitHub: https://github.com/m-piekut</a>
            </div>
            <img className="aboutMe__photo" src={photo} alt=""/>
        </div>
     );
}
 
export default AboutMe;