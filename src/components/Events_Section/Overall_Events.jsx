import React from 'react'
import '../Our_Events/Carousel.css'

import Fade from 'react-reveal/Fade';
import { Button, Paper } from '@mui/material';


import Imageone from '../../Images/EventOne.jpg'
import Imagetwo from '../../Images/EventTwo.jpg'
import Imagethree from '../../Images/EventThree.jpg'
import ImageFour from '../../Images/EventFour.jpg'
import Imagefive from '../../Images/EventFive.jpg'
import Imagesix from '../../Images/EventSix.jpg'
import Imageseven from '../../Images/EventSeven.jpg'


import { Link } from 'react-router-dom';

import './Events.css'
const Overall_Events = () => {
  return (
    <div className="Overall_events">
        <div className="home_button">
        <Link to='/'><Button color="error" variant="contained">close</Button></Link>
        </div>
       <Fade bottom>
          <h1 className="eventstitle" > OUR EVENTS</h1>
        </Fade>
      
      <div className="mega_events">
        <h4 className='sub_events_title'>Mega Events</h4>
        <div className='com_event_section_mega'>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img' src={Imageone} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img'  src={Imageseven} alt="" srcset="" /></Paper>
        </div>
        <div className='com_event_section_mega'>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img' src={Imagetwo} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img'  src={Imagethree} alt="" srcset="" /></Paper>
        </div>
        <div className='com_event_section_mega'>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img' src={Imagefive} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img'  src={ImageFour} alt="" srcset="" /></Paper>
        </div>
        <div className='com_event_section_mega'>
          <Paper elevation={3}  className='com_paper' ><img className='com_event_img'  src={Imagesix} alt="" srcset="" /></Paper>
        </div>

      </div>
      {/* <div className="mega_events">
        <h4 className='sub_events_title'>Mini Events</h4>
        <div className='event_section_mini'>
        <img className='com_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='com_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='com_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        <div className='event_section_mini'>
        <img className='com_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='com_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
       
      </div> */}
     
    </div>
  )
}

export default Overall_Events