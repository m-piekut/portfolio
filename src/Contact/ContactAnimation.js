import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/contactImage.svg'
import gsap from 'gsap'





const ContactAnimation = () => {
    const wrapper = useRef(null)

   useEffect(()=>{
        const [elements] = wrapper.current.children;

        const stripes = elements.getElementById('stripes')
        const leftGirl = elements.getElementById('leftGirl')
        const fifthPlant = elements.getElementById('fifthPlant')
        const rightGirl = elements.getElementById('rightGirl')
        const arrow = elements.getElementById('arrow')
        const letter = elements.getElementById('letter')
        const phone = elements.getElementById('phone')
        const secondPlant = elements.getElementById('secondPlant')
        const firstPlant = elements.getElementById('firstPlant')
        const thirdPlant = elements.getElementById('thirdPlant')
        const fourthPlant = elements.getElementById('fourthPlant')
        const leftCloud = elements.getElementById('leftCloud')
        const middleCloud = elements.getElementById('middleCloud')
        const rightCloud = elements.getElementById('rightCloud')


        gsap.set([ leftGirl, rightGirl, rightCloud, fifthPlant, arrow, letter, phone, secondPlant, firstPlant, thirdPlant, fourthPlant, leftCloud, middleCloud], {autoAlpha: 0}); 

        gsap.set(stripes.children, {opacity:0})
        gsap.set([firstPlant, secondPlant, thirdPlant, fourthPlant, fifthPlant], {transformOrigin: "50%, 100%"})
        gsap.set([arrow, letter, phone], {transformOrigin: "50%, 50%"})
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl
        .fromTo([stripes, stripes.children], {scaleX: 0}, {stagger: .4, scaleX:1 ,  opacity: 0.3})
        .fromTo([firstPlant, secondPlant, thirdPlant, fourthPlant, fifthPlant], {scaleY:0},{stagger: 0.5, scaleY:1, autoAlpha: 1})
        .fromTo(leftCloud, {x:'-100', autoAlpha:1}, {autoAlpha:1, x: '200', duration:12 , repeat:-1, ease: "linear"}, '-=2')
        .fromTo(middleCloud, {x: -120, autoAlpha:1}, {autoAlpha:1, x: 200, duration:18 , repeat:-1, ease: "linear"}, '-=8')
        .fromTo(rightCloud, {x:'-250', autoAlpha:1}, {autoAlpha:1, x: '100', duration:24 , repeat:-1, ease: "linear"}, '-=16')
        .fromTo(arrow, {scale: 0, rotate:0}, {scale:1, autoAlpha:1, rotate: 720, duration: 3},3)
        .fromTo(letter, {scale: 0, rotate:0}, {scale:1, autoAlpha:1, rotate: 720, duration: 3}, 4)
        .fromTo(phone, {scale: 0, rotate:0}, {scale:1, autoAlpha:1, rotate: 720, duration: 3},5)
        .fromTo(leftGirl, {x:'-=20'}, {autoAlpha:1, duration:2, x:'+=20'}, 6)
        .fromTo(rightGirl, {x:'+=20'}, {autoAlpha:1, duration:2, x:'-=20'}, 6.4)

   },[])



    return ( 
        <div ref={wrapper} className="contact__SVGWrapper">
            
        <Scene  className="page__SVG contact__SVG"/>
     </div>
     );
}
 
export default ContactAnimation;