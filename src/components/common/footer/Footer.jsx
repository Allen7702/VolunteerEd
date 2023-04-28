import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
  import { FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>VolunteerEd</h1>
            <span>PLATFORM FOR VOLUNTEERING</span>
            <p>A Platform aimed at recruitung volunteers to aid rural schools that are in need of schools.</p>

           
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
         
          <div className='box link'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              
                COICT Dar es Salaam Tanzania
              </li>
              <li>
              
                +255 786 508 804
              </li>
              <li>
              
                info@volunteer.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved 
        </p>
      </div>
    </>
  )
}

export default Footer
