import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/projectsImage.svg'
import gsap from 'gsap'


const ProjectsAnimations = () => {

    const wrapper = useRef(null)
    useEffect(()=>{
        const [elements] = wrapper.current.children;

        const human = elements.getElementById('human')
        const monitor = elements.getElementById('monitor')
        const mouse = elements.getElementById('mouse')
        const keyboard = elements.getElementById('keyboard')
        const desk = elements.getElementById('desk')
        const pcText = elements.getElementById('pcText')
        const dot = elements.getElementById('dot')
        const screen = elements.getElementById('screen')
        const shoe = elements.getElementById('shoe')
        

        gsap.set([monitor, human, mouse, keyboard, desk], {autoAlpha: 0});
        gsap.set([pcText.children], {autoAlpha: 0})
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});


        tl.fromTo(desk, {x: '+=200'}, {x: '-=200', autoAlpha: 1, duration:1})
        .fromTo(monitor, {y: '-=20'}, {y: '+=20', autoAlpha:1, duration: .5})
        .to([keyboard, mouse], {autoAlpha: 1, duration: .5})
        .fromTo(human, {x: '-=100'}, {x: '+=100', autoAlpha: 1, duration: .5})
        .to(dot, {fill: "rgb(0,255, 0)" })
        .fromTo(screen, {fill: "rgb(0,0, 0)" }, {fill: "rgb(255,255, 255)"})
        .to([pcText.children], {autoAlpha: 1, duration:2, stagger: .3 , repeat: -1})
        .to(shoe, {y: '-=1', repeat: -1, yoyo:true, duration: .5}, '-2')
    },[])
    return ( 
        <div ref={wrapper} className="wrapperTest">

            <Scene  className="pageSVG projects__SVG"/>
         </div>



     );
}
 
export default ProjectsAnimations;