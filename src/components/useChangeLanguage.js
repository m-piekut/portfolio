import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useChangeLanguage = () => {
    const {value} = useSelector(state=> state.language)
    const [plVersion, setPlVersion] = useState()
    useEffect(()=>{
        value === 'PL'? setPlVersion(true) : setPlVersion(false);
        
    },[value])
    return {plVersion}



}
 
export default useChangeLanguage;