import classes from './Main.module.scss'

import mobilepicture from '../../assets/mobile.jpg'

const Main = (props) => {

    const windowidth = window.screen.width

    const onClickHandler = () => {
        props.navHandler('contactme')
    }

    return (
        <div className={classes.main}>
            <h1>Elad <br/> Zipper</h1>
            {(windowidth <= 500) && <img src={mobilepicture} alt='mobilepicture' />}
            {(windowidth > 834) && (
                <p>My name is Elad Zipper, I’m 25 years old and currently living in Ramat Gan.<br/>I study Computer Science at the Open University and a book enthusiastic.<br/>I am a self-taught Front-End Developer, <br/>learning mostly from Udemy courses and projects.</p>)}
            
            {!(windowidth > 834) && (
                <p>My name is Elad Zipper, I’m 25 years old and currently living in Ramat Gan. I study Computer Science at the Open University and a book enthusiastic. I am a self-taught Front-End Developer, learning mostly from Udemy courses and projects.</p> )}
            

            <div className={classes.button} onClick={onClickHandler}>Contact Me</div>
        </div>
    )
}

export default Main