
import React from 'react'
import MultiActionAreaCard from '../../materialUI/CardComponent'
import './Team.css'
import TeamData from "../../Data/Team"
import Fade from 'react-reveal/Fade'
const Team = () => {
  return (
    <div className='Team'>
        <div className="team_wrapper">
            {TeamData.map((teamMember,index) => (
               <Fade bottom><div className="team_col"> <MultiActionAreaCard img={teamMember.img} name={teamMember.name} branch={teamMember.branch} domain={teamMember.domain} mobile={teamMember.mobile} email={teamMember.email}/></div></Fade>
            ))}
        </div>
    </div>
  )
}

export default Team