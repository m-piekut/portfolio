import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/skillsImage.svg'
import gsap from 'gsap'


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

        gsap.set([ desk, plant, pc, dot, icons.children, character], {autoAlpha:0});
        gsap.set( bricks.children, {autoAlpha: 0});
        gsap.set( picture, {autoAlpha: 1});
        gsap.set(plant, {transformOrigin: '50% 100%'});
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});



        tl.fromTo(bricks.children, {y: '-=100' }, {y: '+=100', autoAlpha:.5, stagger: .15, duration: 3})
        .fromTo(plant,{scale: 0}, {scale: 1,autoAlpha: 1, duration: 6}, '-= 1')
        .to([desk, pc, character], {autoAlpha: 1, duration:1}, '-=2')
        .to(dot, {autoAlpha: 1, duration: .2}, '-=0.5')
        .fromTo(icons.children, {}, {visibility: "visible",stagger: .1, opacity: 1}, '-=0.5')


    },[])



    return ( 
        <div ref={wrapper} className="skills__SVGWrapper">

            <Scene  className=" skills__SVG"/>
         </div>


     );
}
 
export default SkillsAnimation;