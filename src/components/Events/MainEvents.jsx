
import React from 'react'
import './Events.css'
import Fade from 'react-reveal/Fade'

// import MultiActionAreaCard from '../../materialUI/CardComponent'

// import TeamData from "../../Data/Team"
// import { EventHandler } from 'react'
import MiniEvents from '../../Data/Events'
import eventone from '../../Images/eventone.jpeg'
import eventwo from '../../Images/eventtwo.jpeg'
import eventhree from '../../Images/eventthree.jpeg'
import eventfour from '../../Images/eventfour.jpeg'
import eventfive from '../../Images/eventfive.jpeg'
import eventsix from '../../Images/eventsix.jpeg'
import eventseven from '../../Images/eventseven.jpeg'
import MiniEvent from '../../materialUI/Mini_event'


import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

const MainEvents = () => {
  return (
    <div className='mainevents'>
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
      <div className="maintilecon">
        <Fade bottom><h1 style={{color:'black'}} className="eventtitle">OUR EVENTS </h1></Fade>
      </div>
      <div className="eventscon">
        <Fade bottom>   <h4 className='subtitleevents'>MEGA EVENTS</h4></Fade>
        <div className="eventimgs">

          <Fade bottom>
            <a href="https://www.instagram.com/p/CoMbrMeqjol/?hl=en" target='blank'><img className='mainimage' src={eventone} alt="" srcset="" /></a>
            <a href="https://www.instagram.com/p/CoJx01jvSoH/?hl=en" target='blank'><img className='mainimage' src={eventwo} alt="" srcset="" /></a>
          </Fade>
        </div>
        <div className="eventimgs">
          <Fade bottom>
          <a href="https://www.instagram.com/p/CoKUCziK-qj/?hl=en" target='blank'><img className='mainimage' src={eventfive} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoJp82DKu5u/?hl=en" target='blank'><img className='mainimage' src={eventfour} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoMP8wRqn5J/?hl=en" target='blank'> <img className='mainimage' src={eventhree} alt="" srcset="" /></a>
          </Fade>
        </div>
        <div className="eventimgs">
          <Fade bottom>
          <a href="https://www.instagram.com/p/CoH5IqGPkvO/?hl=en" target='blank'> <img className='mainimage' src={eventsix} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoL1gZVPZWm/?hl=en" target='blank'><img className='mainimage' src={eventseven} alt="" srcset="" /></a>

          </Fade>
        </div>

      </div>

      <div className="eventscon">
        <Fade bottom>   <h4 className='subtitleevents'>Mini EVENTS</h4></Fade>
        <div className="mini_event_wrapper">
            {MiniEvents.map((minievents,index) => (
               <Fade bottom><div className="team_col"><MiniEvent e_desc={minievents.e_desc} desc={minievents.desc} /></div></Fade>
            ))}
        </div>
      </div>

    </div>
  )
}

export default MainEvents