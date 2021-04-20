import { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";



const Nav = () => {
  
  const [showMenu, setShowMenu] = useState(true);  
  useEffect(()=>{
    if(window.innerWidth >= 992){
      setShowMenu(false)
      
    }

  },[])
    return ( 
        // <Router>
            <div className={`navigation ${showMenu ? 'navigation--unactive': ''}`}>
        <nav className="navigation__list">
          <NavLink className="navigation__item " exact to="/">O Mnie</NavLink>
          <NavLink className="navigation__item " to="/projects">Projekty</NavLink>
          <NavLink className="navigation__item " to="/technologies">Technologie</NavLink>
          <NavLink className="navigation__item " to="/contact">Kontakt</NavLink>
        </nav>
        <button onClick={(e)=>{e.currentTarget.classList.toggle("navigation__button--active"); setShowMenu(!showMenu)}} className="navigation__button  drop ">
          <div className="navigation__bar navigation__bar--first"></div>
          <div className="navigation__bar navigation__bar--second"></div>
          <div className="navigation__bar navigation__bar--second2"></div>
          <div className="navigation__bar navigation__bar--third"></div>
        </button>
        
      </div>
        // </Router>
     );
}
 
export default Nav;