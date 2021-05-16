import ContantForm from './ConcatForm';
import ContactAnimation from './ContactAnimation';
import {ReactComponent as ContactText} from './images/KONTAKT.svg'





const Contact = () => {
    return ( 
        <div className="contact">
            <ContactText className="pageTittle contact__tittle"/>
            <ContantForm/>
            <ContactAnimation/>
        </div>
    )

    }
export default Contact;