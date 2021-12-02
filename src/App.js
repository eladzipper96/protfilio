import './App.css';
import photo from './assets/main.jpg'
import tablet_photo from './assets/main_tablet.jpg'

import Main from './components/Main/Main'
import NavBar from './components/NavBar/NavBar'
import MoreAboutMe from './components/MoreAboutMe/MoreAboutMe'
import Skills from './components/Skills/Skills'
import Projects  from './components/Projects/Project';
import ContactMe from './components/ContactMe/ContactMe'

import {useRef} from 'react'

function App() {

  const mainRef = useRef()
  const moreaboutmeRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const contactmeRef = useRef()

  const windowwidth = window.screen.width

  const activeRefs = (str) => {
    
    if(str==='home') mainRef.current?.scrollIntoView({ behavior: "smooth" })
    if(str==='about') moreaboutmeRef.current?.scrollIntoView({ behavior: "smooth" }) 
    if(str==='skills') skillsRef.current?.scrollIntoView({ behavior: "smooth" })
    if(str==='portfolio') projectsRef.current?.scrollIntoView({ behavior: "smooth" })
    if(str==='contactme') contactmeRef.current?.scrollIntoView({ behavior: "smooth" })

  }

  return (
    <div className={'app'}>

      <div className={'image_container'}>
        <img src={windowwidth > 1024 ? photo : tablet_photo} className={'image'} alt='me'></img>
      </div>

      <div className={'bookmark'}>
        <div className={'name'}>Elad Zipper</div>
      </div>

      <div className={'right'}>
        <NavBar navHandler={activeRefs}/>
        <div ref={mainRef}/>
        <Main navHandler={activeRefs}/>
        <div ref={moreaboutmeRef}/>
        <MoreAboutMe />
        <div ref={skillsRef}/>
        <Skills />
        <div ref={projectsRef}/>
        <Projects />
        <div ref={contactmeRef} />
        <ContactMe />
      </div>

    </div>
  )
}

export default App;
