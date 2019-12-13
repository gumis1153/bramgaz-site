import React from "react"
import { Helmet } from "react-helmet"

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
    <Helmet>
      <meta charSet="utf-8" />
      <title>Bramgaz | Leszno - Bramy. Drzwi. Napędy. Okna</title>
      <meta
        name="description"
        content="Bramy, drzwi, napędy, okna. ul. Chociszewskiego 37a, 64-100 Leszno"
      />
    </Helmet>
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
