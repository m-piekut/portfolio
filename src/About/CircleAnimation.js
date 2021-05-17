import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import {ReactComponent as Scene} from './images/circle.svg'

const CircleAnimation = () => {
    const wrapper = useRef(null)
    useEffect(()=>{
       


    },[])
    return ( 
        <div ref={wrapper} className="wrapperTest">

            <Scene  className="aboutMe__photoCircle"/>
         </div>



     );
}
 
export default CircleAnimation;