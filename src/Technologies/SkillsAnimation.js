import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/skillsImage.svg'
import gsap from 'gsap'
import { useSelector } from 'react-redux';





//dodaj angielską wersję
let html,
css,
js,
react,
firebase,
figma,
sass,
bem,
git,
npm


const SkillsAnimation = () => {
    const {value} = useSelector(state=> state.language)
    
    
    
    useEffect(()=>{
        let skillText = document.querySelector('.skills__text')
        if(value === 'PL'){
            html = "Swoją naukę zacząłem od HTML 5.";
            css = "Po HTML-u  przyszedł czas na CSS 3.";
            js = "Gdy już przyswoiłem HTML i CSS przyszedł czas na JavaScript.";
            react = "Pierwszy framework- React, z jego pomocą wykonałem 'Foddie'.";
            firebase = "Przy kodowaniu 'Foodie' korzystałem z Firebase.";
            figma = "Figma służy mi do projektu graficznego.";
            sass = "W stylowaniu korzystam z preprocesora CSS - SASS.";
            bem = "Korzystam z metodologii BEM.";
            git = "Wykorzystuję kontrolę wersji Git.";
            npm = "NPM jest nieodłacznym elementem mojej pracy.";
            skillText.innerHTML= 'Kliknij na ikonę.'
           
            
        }else{
            html = "I started with HTML5.";
            css = "After HTML, it's time for CSS 3";
            js = "After I assimilated of HTML and CSS, it's time to turn to JavaScript.";
            react = "The first framework - React, with its help I made 'Foodie'.";
            firebase = "I used Firebase when coding 'Foodie";
            figma = "Figma is helping me with graphics projects";
            sass = "I use SASS precprocesor for styling";
            bem = "I write with BEM metodology";
            git = "I use Git control version";
            npm = "NPM is an integral part of my work.";
            skillText.innerHTML= 'Click on the icon.'
        }
    },[value])




    const wrapper = useRef(null)
    
    useEffect(()=>{
        const [elements] = wrapper.current.children;
        const bricks = elements.getElementById('bricks')
        const desk = elements.getElementById('desk')
        const plant = elements.getElementById('plant')
        const pc = elements.getElementById('pc')
        const dot = elements.getElementById('dot')
        const icons = elements.getElementById('icons')
        const character = elements.getElementById('character')
        const picture = elements.getElementById('picture')
        const main = elements.getElementById('main')

        const skillText = document.querySelector('.skills__text')
        
        const textChange = (icon)=>{
            switch (icon) {
                case 'css':
                    skillText.innerHTML = css
                    break;
                case 'firebase':
                    skillText.innerHTML = firebase
                    break;
                case 'html':
                    skillText.innerHTML = html
                    break;
                case 'js':
                    skillText.innerHTML = js
                    break;
                case 'react':
                    skillText.innerHTML = react
                    break;
                case 'figma':
                    skillText.innerHTML = figma
                    break;
                case 'sass':
                    skillText.innerHTML = sass
                    break;
                case 'bem':
                    skillText.innerHTML = bem
                    break;
                case 'git':
                    skillText.innerHTML = git
                    break;
                case 'npm':
                    skillText.innerHTML = npm
                    break;
            
                default:
                    break;
            }
        }
        
        for (const icon of icons.children) {
            icon.addEventListener('click', ()=> textChange(icon.id) )
        }


        gsap.set([ plant, icons.children, skillText], {autoAlpha:0});
        gsap.set( main, {scale: 0, transformOrigin: "50%, 50%"})
        gsap.set( bricks.children, {autoAlpha: 0});
        gsap.set( picture, {autoAlpha: 1});
        gsap.set(plant, {transformOrigin: '50% 100%'});
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});



        tl
        .to(main, {scale: 1})
        .addLabel("second")
        .fromTo(bricks.children, {y: '-=100' }, {y: '+=100', autoAlpha:.5, stagger: .1, }, "second")
        .fromTo(plant,{scale: 0}, {scale: 1,autoAlpha: 1, duration: 6}, "second-=2")
        .addLabel("icons", "-=1.5")
        .to(dot, {autoAlpha: 1, duration: .2, fill: "rgb(131,56, 236)"}, 'icons')
        .fromTo(icons.children, {}, {visibility: "visible",stagger: .1, opacity: 1}, 'icons')
        .to(skillText, {autoAlpha:1})


    },[])



    return ( 
        <div ref={wrapper} className="skills__SVGWrapper">

            <Scene  className=" skills__SVG"/>
         </div>


     );
}
 
export default SkillsAnimation;