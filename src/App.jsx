
import React from 'react'
import './App.css'
import Header from './components/molecules/Header'
import ImageSection from './components/organims/ImageSection'
import ReferentSection from './components/organims/ReferentSection'
import Notesection from './components/organims/NoteSection'
import Blog from './components/organims/Blog.JSX'
import BlogPublicado from './config/BlogPublicado'

 


function App() {

  return (
    <>
     <Header/>
     <ImageSection/> <br /> <br />
     <ReferentSection /> <br /> <br />
     <Notesection/>  <br /> <br />
    <Blog />
 
   
    </>
  )
}

export default App
