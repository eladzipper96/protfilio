import classes from './MoreAboutMe.module.scss'

import drawing from '../../assets/drawing.jpg'

const MoreAboutMe = () => {

    const windowidth = window.screen.width


    return (
        <div className={classes.container}>
            {windowidth > 834 && <h2>More About me</h2>}
            {!(windowidth > 834) && <h2>About me</h2>}
            <div className={classes.main}>

                {(windowidth > 834) && (
                    <p>
                    My 2nd biggest passion after programming are mind games.<br/>
                    One of them is 'Go', which is considered the most complex board game
                    ever created.<br/>
                    I have served for 7 years on the Israel Go Assocation Executive Board<br/>
                    4 of them as the <b>Treasurer and VC of the Assocation.</b>
                    </p>
                )}
                {!(windowidth > 834) && (
                    <p>
                    My 2nd biggest passion after programming are mind games.
                    One of them is 'Go', which is considered the most complex board game
                    ever created.
                    I have served for 7 years on the Israel Go Assocation Executive Board
                    4 of them as the <b>Treasurer and VC of the Assocation.</b>
                    </p>
                )}

                {(windowidth > 834) && (
                    <p>
                    I served on the Israeli Air Force, 123 'Desert Eagles' Squardron.<br/>
                    My position was Helicopter Electrican, and my duty was maintaining<br/>
                    the electrical systems and conducting regular checks.<br/>
                    I was the Right hand of my commander, and promoted to a <b>Team Leader</b>
                    </p>
                )}

                {!(windowidth > 834) && (
                <p>
                    I served on the Israeli Air Force, 123 'Desert Eagles' Squardron.
                    My position was Helicopter Electrican, and my duty was maintaining
                    the electrical systems and conducting regular checks.
                    I was the Right hand of my commander, and promoted to a <b>Team Leader</b>
                </p>
                )}

                {(windowidth > 834) && (
                    <p>
                    Furturmore, Im a book worm, I read about <b>40 books a year</b>, mostly non-fiction<br/>
                    about History, Biograpies, Politics and more.
                    </p>
                )}

                {!(windowidth > 834) && (
                    <p>
                    Furturmore, Im a book worm, I read about <b>40 books a year</b>, mostly non-fiction
                    about History, Biograpies, Politics and more.
                    </p>
                )}

                <img src={drawing} alt='drawing'/>
            </div>
        </div>
    )
}

export default MoreAboutMe