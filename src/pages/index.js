import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import HomePage from "../components/homePage"
import About from "../components/about"
import Offer from "../components/offer"
import Gallery from "../components/gallery"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <Header />
    <HomePage />
    <About />
    <Offer />
    <Gallery />
  </>
)

export default IndexPage
