import ContantForm from './ConcatForm';
import ContactAnimation from './ContactAnimation';

import {ReactComponent as TittlePL} from './images/KONTAKT.svg'
import {ReactComponent as TittleEN} from './images/CONTACT.svg'
import useChangeTittle from '../components/useChangeLanguage';





const Contact = () => {
    const {plVersion} = useChangeTittle()
    return ( 
        <div className="contact">
            {plVersion ? <TittlePL className="pageTittle contact__tittle"/> : <TittleEN className="pageTittle contact__tittle"/>}
            <ContantForm/>
            <ContactAnimation/>
        </div>
    )

    }
export default Contact;