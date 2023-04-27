import React from "react"
import AboutCard from "../about/AboutCard"
import Faq from "../about/Faq"
import Hero from "./hero/Hero"
import Donation from "./Donation"
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />

      <Donation />
     <Faq />
    </>
  )
}

export default Home



