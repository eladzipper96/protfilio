import classes from './NavBar.module.scss'

import download from '../../assets/download.svg'
import resume from '../../assets/resume_eladzipper.pdf'

const NavBar = (props) => {

    const windowidth = window.screen.width
    
    return ( <>
        <div className={classes.navbar}>
            <ul>
                <li onClick={() => props.navHandler('home')}>HOME</li>
                <li onClick={() => props.navHandler('about')}>ABOUT</li> 
                <li onClick={() => props.navHandler('skills')}>SKILLS</li>
                <li onClick={() => props.navHandler('portfolio')}>PORTFOLIO</li>
                {windowidth > 834 && <li onClick={() => props.navHandler('contactme')}>CONTACT ME</li>}
                {!(windowidth > 834) && <li onClick={() => props.navHandler('contactme')}>CONTACT</li>}
            </ul>
            {windowidth > 420 && (
            <a href={resume} download>
                <div className={classes.download}>
                    {windowidth > 834 &&  <div>Download CV</div>}
                     {!(windowidth > 834) &&  <div>CV</div>}
                    <img src={download} alt='V'></img>
                </div>
            </a>
            )}
        </div>
        <>
            {!(windowidth > 420) && (
            <a href={resume} download>
                <div className={classes.download}>

                    <img src={download} alt='V'></img>
                </div>
            </a>
            )}
        </>  
        </>     
    )
}

export default NavBar