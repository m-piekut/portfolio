import PageTittle from "../components/PageTittlle"
import useChangeLanguage from "../components/useChangeLanguage";

import BigCharacter from "./BigCharacter";
import CircleAnimation from "./CircleAnimation";

import {ReactComponent as BigScene} from './images/about.svg'





const AboutMe = () => {
    const {plVersion} = useChangeLanguage()
    return ( 
        <div className="aboutMe">
            <div className="aboutMe__tittleWrapper drop">
                {plVersion ? <h1 className="aboutMe__tittle"> Cześć,<br/> Jestem Marek <br/>  Frontend-Developer </h1> : <h1 className="aboutMe__tittle"> Hello,<br/> I am Marek <br/>  Frontend-Developer </h1>}
                
                <div className="aboutMe__circleWrapper">
                    <div className="aboutMe__circle inner darkColor"></div>
                    <div className="aboutMe__circle drop technologyColor"></div>
                    <div className="aboutMe__circle inner contactColor"></div>
                </div>
            </div >
            <div className="aboutMe__text inner">
            {plVersion ? <p>Interesuję się programowaniem od około dwóch lat.
                    Od dawna również interesuję się aplikacjami webowymi. Chciałbym zostać frontend developerem ponieważ taki rodzaj pracy bardzo mi odpowiada. Podczas kodowania udaje mi się uzyskać zjawisko "przepływu", podczas którego 3 godziny odczuwam jak 30 minut. Obecnie opanowałem w zadowalającym stopniu: HTML, CSS/SCSS, BEM, JavaScript oraz uczę się Reacta. Staram codziennie się rozwijać i stawać się lepszym. Moje umiejętności miękkie, przez to, że jestem nauczycielem są dobrze rozwinięte.
                </p> : <p>I've been interested in programming for about two years. I have also been interested in web applications for a long time. I would like to become a frontend developer because this type of work suits me very well. During coding I manage to get a "flow" phenomenon, during which 3 hours feel like 30 minutes. Currently I have mastered satisfactorily: HTML, CSS / SCSS, BEM, JavaScript and I'm learning React. I try to develop and become better every day. My soft skills are well developed due to the fact that I am a teacher. </p>}
                
                <a href="https://github.com/m-piekut" target="_blank" className="aboutMe__git">GitHub: https://github.com/m-piekut</a>
            <CircleAnimation />
            </div>
            <BigCharacter/>
        </div>
     );
}
 
export default AboutMe;