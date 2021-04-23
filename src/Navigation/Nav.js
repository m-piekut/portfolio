import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {changeLanguage} from '../redux/slices/LanguageSlice'
import NavLanguages from './NavLanguages'

const Nav = () => {
  const {value} = useSelector(state=> state.language)
  const dispatch = useDispatch();
  const [content, setContent] = useState(NavLanguages.PL) 
  const [showMenu, setShowMenu] = useState(true);  
  useEffect(()=>{
    if(window.innerWidth >= 992){
      setShowMenu(false)
      
    }
  },[])

  useEffect(()=>{
      value === 'PL' ? setContent(NavLanguages.PL) : setContent(NavLanguages.EN) 
  },[value])



    return ( 
        // <Router>
            <div className={`navigation ${showMenu ? 'navigation--unactive': ''}`}>
        <nav className="navigation__list">
          <NavLink className="navigation__item " exact to="/">{content.aboutMe}</NavLink>
          <NavLink className="navigation__item " to="/projects">{content.work}</NavLink>
          <NavLink className="navigation__item " to="/technologies">{content.skills}</NavLink>
          <NavLink className="navigation__item " to="/contact">{content.contact}</NavLink>
        <div className="navigation__languageButtons">
          <button onClick={()=> dispatch(changeLanguage('PL'))}>PL</button>
          <button onClick={()=> dispatch(changeLanguage('EN'))}>EN</button>
          <button>{value}</button>

        </div>
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