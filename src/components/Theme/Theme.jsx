import React from 'react'
import './Theme.css'
import { Fade } from 'react-reveal'
const Theme = () => {
  return (
    <div className="themeCon">
        <div><Fade bottom><h1 className="theme_title"> OUR THEME</h1></Fade></div>
      <div className="content_box">
      <p className="theme_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi facilis saepe tempore optio debitis voluptatum dolorem sit dolore, magni sapiente impedit omnis rerum ipsa numquam sint veritatis officiis est odio amet neque perferendis vero? Error eaque, officiis cumque aut, recusandae obcaecati ipsam voluptates dolorem vero nulla dolorum similique eum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate porro nulla voluptatibus sed nostrum labore facilis, animi eligendi id amet.
        </p>
      </div>
    </div>
  )
}

export default Theme