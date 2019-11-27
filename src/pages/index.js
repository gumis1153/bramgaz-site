import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import HomePage from "../components/homePage"
import About from "../components/about"
import Offer from "../components/offer"
import Realizations from "../components/Realizations"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import Footer from "../components/footer"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <Header />
    <HomePage />
    <About />
    <Offer />
    <Realizations />
    <Certifications />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
