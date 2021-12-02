import classes from './ContactMe.module.scss'

import signature from '../../assets/signature.png'
import send from '../../assets/send.svg'

import emailjs from 'emailjs-com'
import { useState, useRef } from 'react'

const ContactMe = () => {

    const [fullName, setFullName] = useState()
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const form = useRef();

    const submitHandler = (e) => {
        
        e.preventDefault();

        emailjs.sendForm('service_wd4weya', 'template_rb9c45v', form.current, 'user_I9v0F4CU20V5Dwcvwnnrm')
          .then((result) => {
              alert('Your mail sent successfully!')
              console.log(result.text);
          }, (error) => {
              alert('Error sending the mail, try again later')
              console.log(error.text);
          });

          setFullName('')
          setCompany('')
          setEmail('')
          setMessage('')
    }

    return (
        <div className={classes.container}>
            <h2>Contact Me</h2>
            <div className={classes.main}>
                <form className={classes.form} ref={form} onSubmit={submitHandler}>
                    <div className={classes.formitem}>
                        <label htmlFor='fullname'>Full Name*</label>
                        <input type='text' id='fullname' name='fullname' required placeholder='Elad Zipper' onChange={(e) => setFullName(e.target.value)} value={fullName}></input>
                    </div>
                    <div className={classes.formitem}>
                        <label htmlFor='company'>Company</label>
                        <input type='text' id='company' name='company' placeholder='Company INC.' onChange={(e) => setCompany(e.target.value)} value={company}></input>
                    </div>
                    <div className={classes.formitem}>
                        <label htmlFor='email'>Email*</label>
                        <input type='email' id='email' name='email' required placeholder='eladzipper96@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className={classes.formitem}>
                        <label htmlFor='message'>Message*</label>
                        <textarea className={classes.inputmsg} id='message' name='message' required placeholder='Write Here' onChange={(e) => setMessage(e.target.value)} value={message}/>
                    </div>
                    <button type='submit' className={classes.submitbutton}>
                        <span>Send Message</span>
                        <img src={send} alt='>' />
                    </button>
                </form>

                <div className={classes.infocard}>

                    <div className={classes.infocardtitle}>
                        <h3>Elad Zipper</h3>
                        <h5>Front-End Developer</h5>
                    </div>

                    <div className={classes.line}>
                        <span>RESIDENCE:</span>
                        <span>Ramat Gan, Israel</span>
                    </div>
                    <div className={classes.line}>
                        <span>EMAIL:</span>
                        <span>eladzipper96@gmail.com</span>
                    </div>
                    <div className={classes.line}>
                        <span>PHONE:</span>
                        <span>+972-549843331</span>
                    </div>

                    <img className={classes.signature} src={signature} alt='Signature' />

                </div>
            </div>
        </div>
    )
}

export default ContactMe