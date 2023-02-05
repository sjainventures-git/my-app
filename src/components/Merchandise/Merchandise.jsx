import React from 'react'
import './Merchandise.css'

import  Merchand from '../../Images/Merchandise.jpeg'
import MerchandForm from '../../materialUI/MerchanForm'




import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material'; 

const Merchandise = () => {
  return (
    <div className="main_merchan">
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
        <div className='left_class'>
          <img className='merchanImg' src={Merchand} alt="" srcset="" />
        </div>
        <div className="register_class">
          <h4 className='merchantext'>Register your entry here and grab the merchandise</h4>
           <MerchandForm />
        </div>
    </div>
  )
}

export default Merchandise