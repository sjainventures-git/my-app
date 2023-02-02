import React from 'react'
import './Carousel.css'

import Fade from 'react-reveal/Fade';
import { Button, Paper } from '@mui/material';

import Imageone from '../../Images/Four_Event.jpeg'
import Imagetwo from '../../Images/One_Event.jpeg'
import Imagethree from '../../Images/Five_Event.jpeg'
import { Link } from 'react-router-dom';

const Our_Events = () => {
  return (
    <div id='events' className="overall_carousel">
       <Fade bottom>
          <h1 className="eventstitle" > OUR EVENTS</h1>
        </Fade>
      <div className="overall_mega_events">
        <h4 className='overall_sub_events_title'>Mega Events</h4>
        <div className='overall_event_section_mega'>
          <Paper elevation={3}  className='paper' ><img className='overall_event_img' src={Imageone} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='overall_event_img'  src={Imagetwo} alt="" srcset="" /></Paper>
          <Paper elevation={3}  className='paper' ><img className='overall_event_img'  src={Imagethree} alt="" srcset="" /></Paper>

        </div>
        
        
      </div>
      <div className="overall_mega_events">
        <h4 className='overall_sub_events_title'>Mini Events</h4>
        <div className='overall_event_section_mini'>
        <img className='overall_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='overall_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='overall_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div>
        {/* <div className='event_section_mini'>
        <img className='overall_event_img_mini' src={Imageone} alt="" srcset="" />
         <img className='overall_event_img_mini'  src={Imagetwo} alt="" srcset="" />
         <img className='overall_event_img_mini'  src={Imagethree} alt="" srcset="" />

        </div> */}
        <Link to='events'><Button color="success" variant="contained">Tap here to know more</Button></Link>
         
      </div>
    </div>
  )
}

export default Our_Events