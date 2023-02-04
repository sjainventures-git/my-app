import React from 'react'
import './Events.css'
import eventone from '../../Images/galleryone.jpg'
import eventwo from '../../Images/gallerytwo.jpg'
import eventhree from '../../Images/gallerythree.jpg'
import eventfour from '../../Images/galleryfour.jpg'
import eventfive from '../../Images/galleryfive.jpg'
import eventsix from '../../Images/gallerysix.jpg'
import eventseven from '../../Images/galleryeight.png'


import { Fade } from 'react-reveal'
const Events = () => {
  return (
    <div id='events' className='events'>
        <div className="maintilecon">
            <h1 className="eventtitle">OUR EVENTS </h1>
        </div>
        <div className="eventscon">
            <h4>MEGA EVENTS</h4>
            <div className="eventimgs">
              
                <Fade bottom>
                <img className='imge' src={eventone} alt="" srcset="" />
               <img className='imge' src={eventwo} alt="" srcset="" />
                </Fade>
            </div>
            <div className="eventimgs">
                <Fade bottom>
                <img className='imge' src={eventfive} alt="" srcset="" />
                <img className='imge' src={eventfour} alt="" srcset="" />
                <img className='imge' src={eventhree} alt="" srcset="" />
                </Fade>
            </div>
            <div className="eventimgs">
               <Fade bottom>
               <img className='imge' src={eventsix} alt="" srcset="" />
               <img className='imge' src={eventseven} alt="" srcset="" />
                
               </Fade>
            </div>
           
        </div>
    </div>
  )
}

export default Events