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
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
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
         
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <FaFacebook />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
              <FaFacebook />
                +2 392 3929 210
              </li>
              <li>
              <FaFacebook />
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div>
    </>
  )
}

export default Footer
