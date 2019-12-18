import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../icons/icon-144x144.png"
import Header from "../components/header"
import HomePage from "../components/homePage"
import About from "../components/about"
import Offer from "../components/offer"
import Realizations from "../components/Realizations"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import Footer from "../components/footer"
import CookieConsent from "react-cookie-consent"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href={favicon} />
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
    <CookieConsent
      enableDeclineButton
      declineButtonText="Odrzuć"
      buttonText="Pozwól"
      cookieName="myAwesomeCookieName2"
      style={{
        background: "#00366F",
        fontFamily: "Quicksand, sans-serif",
        fontSize: "14px",
      }}
      declineButtonStyle={{
        fontSize: "13px",
        fontFamily: "Quicksand, sans-serif",
        background: "transparent",
      }}
      buttonStyle={{
        color: "#ffffff",
        fontSize: "13px",
        fontFamily: "Quicksand, sans-serif",
        background: "transparent",
        border: "1px solid #ffffff",
        padding: "10px 15px",
      }}
      expires={150}
    >
      Ta strona internetowa używa ciasteczek aby zapewnić ci najlepsze wrażenia
      na naszej stronie.
      <a
        href="https://consent.is/about-cookies"
        style={{
          fontSize: "10px",
          textDecoration: "none",
          color: "#ffffff",
          marginLeft: "10px",
        }}
      >
        Dowiedz się więcej...
      </a>
    </CookieConsent>
  </>
)

export default IndexPage
