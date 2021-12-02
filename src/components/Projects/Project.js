import classes from './Projects.module.scss'

import chat1 from '../../assets/chat1.png'
import chat2 from '../../assets/chat2.png'
import chat3 from '../../assets/chat3.png'
import chat1_mobile from '../../assets/chat1_mobile.png'
import chat2_mobile from '../../assets/chat2_mobile.png'
import chat3_mobile from '../../assets/chat3_mobile.png'

import invoice1 from '../../assets/invoice1.png'
import invoice2 from '../../assets/invoice2.png'
import invoice3 from '../../assets/invoice3.png'
import invoice1_mobile from '../../assets/invoice1_mobile.png'
import invoice2_mobile from '../../assets/invoice2_mobile.png'
import invoice3_mobile from '../../assets/invoice3_mobile.png'

import ChatApp from '../../assets/ChatApp.svg'
import InvoiceApp from '../../assets/InvoiceApp.svg'
import bullet from '../../assets/radiobutton.svg'
import bullet_color from '../../assets/radiobutton_color.svg'

import {useState, useEffect, useRef} from 'react'

const Projects = () => {
    const windowidth = window.screen.width

    const [chatImage, SetChatImage] = useState((windowidth > 500 ? chat1 : chat1_mobile))
    const [invoiceImage, setInvoiceImage] = useState((windowidth > 500 ? invoice1 : invoice1_mobile))

    // Flages are used to stop the Intervals from activating
    const [chatFlag, setChatFlag] = useState(false)
    const [invoiceFlag, setInvoiceFlag] = useState(false)

    let chatImageRef = useRef(1)
    let invoiceImageRef = useRef(1)


    useEffect(() => {
        clearAllIntervals()
        if(!chatFlag){
            const chatInterval = setInterval(() => {
                if(windowidth <= 500) {
                    if(chatImage === chat1) SetChatImage(chat2_mobile)
                    if(chatImage === chat2) SetChatImage(chat3_mobile)
                    if(chatImage === chat3) SetChatImage(chat1_mobile)  
                }
                else {
                    if(chatImage === chat1) SetChatImage(chat2)
                    if(chatImage === chat2) SetChatImage(chat3)
                    if(chatImage === chat3) SetChatImage(chat1) 
                }
            },10000)
        }

        if(!invoiceFlag){
            const invoiceInterval = setInterval(() => {
                if(windowidth <= 500) {
                    if(invoiceImage === invoice1) setInvoiceImage(invoice2_mobile)
                    if(invoiceImage === invoice2) setInvoiceImage(invoice3_mobile)
                    if(invoiceImage === invoice3) setInvoiceImage(invoice1_mobile)
                }
                else {
                    if(invoiceImage === invoice1) setInvoiceImage(invoice2)
                    if(invoiceImage === invoice2) setInvoiceImage(invoice3)
                    if(invoiceImage === invoice3) setInvoiceImage(invoice1)
                }
            },10000)
        }
       
    },[chatImage,invoiceImage,invoiceFlag,chatFlag])



    const clearAllIntervals = () => {

        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
        } 
    }

    const ImageSwitcher = (str,num) => {
        
        if(str==="chat") {
           
            if(!chatFlag) {
                clearAllIntervals()
                setChatFlag(true)
            }
            if(windowidth <= 500) {
                chatImageRef.current = (num===3 ? 0 : num)
                if(num===1) SetChatImage(chat1_mobile)
                if(num===2) SetChatImage(chat2_mobile)
                if(num===3) SetChatImage(chat3_mobile) 
            }
            if(!(windowidth <= 500)) {
            if(num===1) SetChatImage(chat1)
            if(num===2) SetChatImage(chat2)
            if(num===3) SetChatImage(chat3)    
            }
        }
        if(str==="invoice") {
            if(!invoiceFlag) {
                clearAllIntervals()
                setInvoiceFlag(true)
            }

            if(windowidth <= 500) {
                invoiceImageRef.current = (num===3 ? 0 : num)
                if(num===1) setInvoiceImage(invoice1_mobile)
                if(num===2) setInvoiceImage(invoice2_mobile)
                if(num===3) setInvoiceImage(invoice3_mobile)  
            }
            if(!(windowidth <= 500)) {
                if(num===1) setInvoiceImage(invoice1)
                if(num===2) setInvoiceImage(invoice2)
                if(num===3) setInvoiceImage(invoice3)    
            }      
        }
    }

    return (
        <div className={classes.container}>
            <h2>My Favorite Projects</h2>
                <div className={classes.itemcontainer}>

                    <div className={classes.item}>

                        <div className={classes.itemtop}>
                            {windowidth > 834 && <img src={ChatApp} alt='ChatApp'></img>}
                            {windowidth > 500 && <h3>Instant messaging platfrom App</h3>}
                            {!(windowidth > 500) && <h3>Instant messaging<br/>platfrom App</h3>}
                        </div>

                        <div className={classes.item_main}>
                            <div className={classes.rollercoaster}>
                                <a href='https://eladchatapp.me/' target='_blank'>
                                    <img className={classes.mainimage} src={chatImage} alt='chatimage'       onTouchStart={() => ImageSwitcher('chat',chatImageRef.current+1)}/>
                                </a>
                                <div className={classes.bullets}>

                                    {(chatImage === chat1 || chatImage === chat1_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('chat',1)} alt='o' ></img>}
                                    {(chatImage !== chat1 && chatImage !== chat1_mobile) && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('chat',1)} alt='o'></img>}

                                    {(chatImage === chat2 || chatImage === chat2_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('chat',2)} alt='o'></img>}
                                    {(chatImage !== chat2 && chatImage !== chat2_mobile) && chat2_mobile && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('chat',2)} alt='o'></img>}

                                    {(chatImage === chat3 || chatImage === chat3_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('chat',3)} alt='o'></img>}
                                    {(chatImage !== chat3 && chatImage !== chat3_mobile) && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('chat',3)} alt='o'></img>}


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.item}>

                    <div className={classes.itemtop}>
                    {windowidth > 834 && <img src={InvoiceApp} alt='InvoiceApp'></img>}
                            <h3>Invoices managment platform App</h3>
                        </div>

                        <div className={classes.item_main}>
                            <div className={classes.rollercoaster}>
                                <a href='https://www.eladinvoiceback.me/' target='_blank'>
                                    <img className={classes.mainimage}src={invoiceImage} alt='invoiceimage'     onTouchStart={() => ImageSwitcher('invoice',invoiceImageRef.current+1)}/>
                                </a>
                                <div className={classes.bullets}>

                                    {(invoiceImage === invoice1 || invoiceImage === invoice1_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('invoice',1)} alt='o'></img>}
                                    {(invoiceImage !== invoice1 && invoiceImage !== invoice1_mobile) && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('invoice',1)} alt='o'></img>}

                                    {(invoiceImage === invoice2 || invoiceImage === invoice2_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('invoice',2)} alt='o'></img>}
                                    {(invoiceImage !== invoice2 && invoiceImage !== invoice2_mobile) && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('invoice',2)} alt='o'></img>}

                                    {(invoiceImage === invoice3 || invoiceImage === invoice3_mobile) && <img className={classes.bullet}src={bullet} onClick={() => ImageSwitcher('invoice',3)} alt='o'></img>}
                                    {(invoiceImage !== invoice3 && invoiceImage !== invoice3_mobile) && <img className={classes.bullet}src={bullet_color} onClick={() => ImageSwitcher('invoice',3)} alt='o'></img>}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Projects