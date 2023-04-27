import React from "react"
import "./home.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import paypal from "./PayPal_logo.png"
import visa from "./Visa_and_Mastercard_logo.png"
import airtime from "./Privat24_logo.png"


// copy code of blog => blogCard

const Donation = () => {
  return (
    <>
    <section className="donation" id="donation">
   
    <Heading subtitle='DONATIONS' title='Donate for a better Tommorror' />
      <div className="container">
        <div className="donation-container" data-center-center="opacity:1;top:0;" data-0-bottom="opacity:1;top:100px;">
          <div className="card">
            <div className="box">
              <h2>01</h2>

              <div className="content">
                <img src={airtime} alt="Privat24_logo" />
                <h3>AirTime</h3>
                <a href="#">Donate</a>
              </div>
            </div>
          </div>
        </div>
        <div className="donation-container" data-center-center="opacity:1;top:-10;" data-0-bottom="opacity:1;top:100px;">
          <div className="card">
            <div className="box">
              <h2>02</h2>

              <div className="content">
                <img src={paypal} alt="Privat24_logo" />
                <h3>PayPal</h3>
                <a href="#">Donate</a>
              </div>
            </div>
          </div>
        </div>
        <div className="donation-container" data-center-center="opacity:1;top:0;" data-0-bottom="opacity:1;top:100px;">
          <div className="card">
            <div className="box">
              <h2>03</h2>

              <div className="content" >
                <img src={visa} alt="Privat24_logo" />
                <h3>Credit Card</h3>
                <a href="#">Donate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    
  </section>

    </>
  )
}

export default Donation
