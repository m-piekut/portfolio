import emailjs from 'emailjs-com';
import { useState } from 'react';
import Loader from '../components/Loader';



const ContantForm = () => {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [contentValue, setContentValue] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_27uc0ns', 'email_template', e.target, 'user_gRGVfGMPGbQuz7FepSj5C')
          .then((result) => {
              e.target.value = ''
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

      const test = (e) =>{
          setIsLoading(true)
          setDisabled(false)
        setTimeout(() => {
            setIsLoading(false)
            setDisabled(false)
            alert('wysłano wiadomość')
        }, 3000);
          e.preventDefault()
          setContentValue('')
          setEmailValue('')
          setNameValue('')
      }



    return ( 

        <form id="contactForm"  className="contact__form" onSubmit={test}>
                  {isLoading && <Loader/>}
            <div className="contact__inputs">
            <input type="text" required className="contact__input contact__input--up" value={nameValue} disabled={disabled}  onChange={(e)=> setNameValue(e.target.value)} placeholder="nazwa" name="from_name" />
            <input type="email" required className="contact__input contact__input--down" value={emailValue} disabled={disabled} onChange={(e)=> setEmailValue(e.target.value)}  placeholder="e-mail" name="reply_to"/>
            </div>

            <div className="contact__formDown">
            <textarea className="contact__formContent" value={contentValue} disabled={disabled}  onChange={(e)=> setContentValue(e.target.value)} required cols="30" rows="10" placeholder="treść wiadomośći"name="message"></textarea>
            <button type="submit" form="contactForm"  className="contact__send">Wyślij</button>
            </div>
        </form>



     );
}
 
export default ContantForm;