import classes from './Skills.module.scss'

import prog from '../../assets/programming.png'
import lang from '../../assets/lang.png'
import people from '../../assets/people.png'
const Skills = () => {

    const windowidth = window.screen.width

    return (
        <div className={classes.container}>
            {windowidth > 834 && <h2>My Skills and Traits</h2>}
            {!(windowidth > 834) && <h2>My Skills<br/>and Traits</h2>}
            <div className={classes.main}>
                <div className={classes.card}>
                    <div className={classes.listcontainer}>
                        <h3>Programming</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SASS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>NodeJS</li>
                            <li>Java</li>
                            <li>C</li>
                        </ul>
                    </div>

                    <img src={prog} alt='programming'/>
                </div>

                <div className={classes.card}>
                    <div className={classes.listcontainer}>
                        <h3>{'Social & Traits'}</h3>
                        <ul>
                            <li>Loyal</li>
                            <li>Hard Working</li>
                            <li>Honest</li>
                            <li>Friendly</li>
                            <li>Diligent</li>
                            <li>Trustworthy</li>
                            <li>Reliable</li>
                            <li>Leadership</li>
                        </ul>
                    </div>
                    <img src={people} alt='h'/>
                </div>
                <div className={classes.card}>
                    <div className={classes.listcontainer}>
                        <h3>Languages</h3>
                        <ul>
                            <li>Hebrew</li>
                            <li>English</li>
                            <li>French</li>
                        </ul>
                    </div>
                    <img src={lang} alt='languages'/>
                </div>
            </div>
        </div>
    ) 
}

export default Skills