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
  const [test, setTest] = useState(true)
 
  
  const [languageInfo, setLanguageInfo] = useState(localStorage.getItem('Language'))
  
 
  
  useEffect(()=>{
    if(window.innerWidth >= 992){
      setShowMenu(false)
      
    }
  },[])
  
  
  const handleChangeLanguage = (language) =>{
    localStorage.setItem('Language', language)
    dispatch(changeLanguage(localStorage.getItem("Language")))
  }

  useEffect(()=>{

  },[])


  
  
  useEffect(()=>{  
    if(test){
      var plButton = document.querySelector('.navigation__languageButton--PL')
      var enButton = document.querySelector('.navigation__languageButton--EN')
      // setTest(false)
    }
    console.log(languageInfo)
    if(value === 'EN'){
      setContent(NavLanguages.EN)
      plButton.classList.remove('navigation__languageButton--active')
      enButton.classList.add('navigation__languageButton--active')
    }else{
      enButton.classList.remove('navigation__languageButton--active')
      plButton.classList.add('navigation__languageButton--active')
      setContent(NavLanguages.PL)
    }
  },[value, showMenu])
  useEffect(()=>{
    const navButton = document.querySelector('.navigation__button')
    !showMenu?  navButton.classList.add("navigation__button--active") : navButton.classList.remove("navigation__button--active");
    
  },[showMenu])
    

    return ( 
        // <Router>
            <div className={`navigation ${showMenu ? 'navigation--unactive': ''}`}>
        <nav className="navigation__list">
          <NavLink className="navigation__item " exact to="/" onClick={()=>setShowMenu(!showMenu)}>{content.aboutMe}  </NavLink>
          <NavLink className="navigation__item " to="/projects" onClick={()=>setShowMenu(!showMenu)}>{content.work}  </NavLink>
          <NavLink className="navigation__item " to="/skills" onClick={()=>setShowMenu(!showMenu)}>{content.skills}  </NavLink>
          <NavLink className="navigation__item " to="/contact" onClick={()=>setShowMenu(!showMenu)}>{content.contact}  </NavLink>
        <div className="navigation__languageButtons">
          <button className="navigation__languageButton navigation__languageButton--PL navigation__languageButton--active" onClick={()=>handleChangeLanguage('PL')}>PL</button>
          <button className="navigation__languageButton navigation__languageButton--EN" onClick={()=> {handleChangeLanguage('EN'); setShowMenu(!showMenu)}}>EN</button>

        </div>
        </nav>
        <button  onClick={(e)=>{ setShowMenu(!showMenu)}} className="navigation__button  drop ">
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