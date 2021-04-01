import  {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import React from "react";
import projects from '../assets/data/projects';
import Navbar from "../Components/Navbar";
import SlideShow from "../Components/SlideShow";
import TitleCard from './../Components/TitleCard';
import BottomBar from './../Components/BottomBar';
import Button from './../Components/button';
export default function ProjectSimple({location}) {
 
    useEffect(() => {
      let screen = document.querySelector('.projectPageContainer');
      screen.classList.add('fade-in')
        window.scrollTo(0, 0);
    }, []);


    if(location.projectProps === undefined){
      let path = `/home`;
    window.location.href = path;
    }

    let history = useHistory();
  const{name} = location.projectProps;
  const project = projects.find(proj => proj.name === name);
  const { title, img, tags, descrip, projectImgs, buttons, gridStyle} = project;

  const onClick = (link) => {
    var win = window.open(link, '_blank');
    win.focus();
  }

  const returnToHome = () => {
    history.push('./home');
  }
  
  return (
    <div className="projectpage">
      <Navbar home={false}/>
      <TitleCard title={title} img={img} tags={tags.join(', ')} name={name}/>
      <div className='projectPageContainer'>
      <div className='projectDescrip'>{descrip[0]}</div>
      <SlideShow Items={projectImgs} gridStyle={gridStyle}/>
      {descrip[1] && <div className='projectDescrip'>{descrip[1]} </div>} 
      </div>
     { buttons && <div className='buttonContainer'>
      {buttons.map(button => 
          <Button text={button.text} onClick={()=> onClick(button.linkDirect)}/>)
      }
    

      </div>}

      <Button className='homeButton' text={"return to home page"} onClick={()=> returnToHome()}/>
     <BottomBar />
    </div>
  );
}
