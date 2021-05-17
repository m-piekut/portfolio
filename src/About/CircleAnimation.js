import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/circle.svg'

const CircleAnimation = () => {
    const wrapper = useRef(null)
    useEffect(()=>{
        const [elements] = wrapper.current.children;

        const character = elements.getElementById('character')
        const circleWrapper = elements.getElementById('circleWrapper')
        gsap.set([character, circleWrapper], {autoAlpha:0, transformOrigin: "50% 50%" });
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl
        .fromTo(character, {scale:0},{scale:1, autoAlpha:1 , duration:1})
        .fromTo(circleWrapper, {scale:2},{scale:1, autoAlpha:1, duration:1}, "-=")


    },[])
    return ( 
        <div ref={wrapper} className="wrapperTest">

            <Scene  className="aboutMe__photoCircle"/>
         </div>



     );
}
 
export default CircleAnimation;