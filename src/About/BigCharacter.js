import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/about.svg'

const BigCharacter = () => {
    const wrapper = useRef(null)
    useEffect(()=>{
        const [elements] = wrapper.current.children;


        const character = elements.getElementById('character')
        const floor = elements.getElementById('floor')
        const leafs = elements.getElementById('leafs')
        const stalk = elements.getElementById('stalk')


        gsap.set([character], {autoAlpha: 0});
        gsap.set([leafs.children], {autoAlpha: 0});
        gsap.set([stalk], {  scale:0, transformOrigin: "50%, 100%"});
        gsap.set([floor], {scale:0, transformOrigin: "100%, 50%"});
        
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl
        .to(floor, {scale: 1, duration: 1.5})
        .to(stalk, {scale:1, duration:1.5}, "-=1")
        .to([leafs.children],{stagger:0.1 ,autoAlpha:1 } )
        .fromTo(character,{x: '+=200'}, {x: "-=200", autoAlpha:1 } )



    },[])
    return ( 
        <div ref={wrapper} className="wrapperTest">

            <Scene   className="aboutMe__photo aboutMe__SVG"/>
         </div>



     );
}
 
export default BigCharacter;