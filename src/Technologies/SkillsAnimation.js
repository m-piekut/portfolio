import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/skillsImage.svg'
import gsap from 'gsap'


let html = "Swoją naukę zacząłem od HTML 5.";
let css = "Po HTML-u  przyszedł czas na CSS 3.";
let js = "Gdy już przyswoiłem HTML i CSS przyszedł czas na JavaScript.";
let react = "Pierwszy framework- React, z jego pomocą wykonałem 'Foddie'.";
let firebase = "Przy kodowaniu 'Foodie' korzystałem z Firebase.";
let figma = "Figma służy mi do projektu graficznego.";
let sass = "W stylowaniu korzystam z preprocesora CSS - SASS.";
let bem = "Korzystam z metodologii BEM.";
let git = "Wykorzystuję kontrolę wersji Git.";
let npm = "NPM jest nieodłacznym elementem mojej pracy.";


//dodaj angielską wersję


const SkillsAnimation = () => {
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