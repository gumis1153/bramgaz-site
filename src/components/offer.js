import React, { Component } from "react"
import Slider from "react-slick"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/offer.css"

import OfferIndividuals from "./offerIndividuals"
import OfferIndustry from "./offerIndustry"

import logo1 from "../images/aluplast.gif"
import logo2 from "../images/asilo.png"
import logo3 from "../images/beninca.png"
import logo4 from "../images/classen-logo.jpg"
import logo5 from "../images/dierre.jpg"
import logo6 from "../images/gealan.gif"
import logo7 from "../images/himotions.jpg"
import logo8 from "../images/hormann-logo.png"
import logo9 from "../images/krispol_logo.png"
import logo10 from "../images/loading-system.png"
import logo11 from "../images/logo_bigtor.jpg"
import logo12 from "../images/logo-Cal.png"
import logo13 from "../images/logo-polfendo.png"
import logo14 from "../images/marantec.png"
import logo15 from "../images/metalpol.jpg"
import logo16 from "../images/ogromet.png"
import logo17 from "../images/porta_drzwi.png"
import logo18 from "../images/rehau.png"
import logo19 from "../images/robelit.gif"
import logo20 from "../images/roothkin.png"
import logo21 from "../images/wikend-n.jpg"
import logo22 from "../images/winkhaus.jpg"
import logo23 from "../images/wisniowski-logo.png"

class Offer extends Component {
  state = {
    clientType: "individual",
    isLoading: false,
  }

  handleIndividualBtn = () => {
    this.setState({
      clientType: "individual",
      isLoading: true,
    })
  }

  handleIndustryBtn = () => {
    this.setState({
      clientType: "industry",
      isLoading: true,
    })
  }

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section className="offer" id="offer">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1> Oferta </h1>{" "}
          </div>
          <div className="offerMain">
            <div className="clientTypeButtons">
              <button
                onClick={this.handleIndividualBtn}
                className={
                  "clientBtn" +
                  (this.state.clientType === "individual" ? " active" : "")
                }
              >
                Dla klienta indywidualnego{" "}
              </button>{" "}
              <button
                onClick={this.handleIndustryBtn}
                className={
                  "clientBtn" +
                  (this.state.clientType === "industry" ? " active" : "")
                }
              >
                Dla przemysłu{" "}
              </button>{" "}
            </div>{" "}
            <div className="availableOffer">
              {this.state.clientType === "individual" ? (
                <OfferIndividuals />
              ) : (
                <OfferIndustry />
              )}
            </div>
            <div className="deliversSlider">
              <Slider {...settings}>
                <div>
                  <OutboundLink
                    href="https://www.aluplast.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo1} alt="Logo firmy Aluplast" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://asilo.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo2} alt="Logo firmy Asilo" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://beninca.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo3} alt="Logo firmy Beninca" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://classen.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo4} alt="Logo firmy Classen" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="http://dierre.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo5} alt="Logo firmy Dierre" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.gealan.de/pl/gealan-fenster-systeme-gmbh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo6} alt="Logo firmy Gealan" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="http://himotions.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo7} alt="Logo firmy Hi Motions" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.hormann.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo8} alt="Logo firmy Hormann" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://krispol.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo9} alt="Logo firmy Krispol" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.loading-systems.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo10} alt="Logo firmy Loading System" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="http://www.bigtor.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo11} alt="Logo firmy Big Tor" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.drzwi-cal.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo12} alt="Logo firmy Cal" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="http://www.polfendo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo13} alt="Logo firmy Polfendo" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.marantec.com/pl/strona-startowa.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo14} alt="Logo firmy Marantec" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.metalpol.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo15} alt="Logo firmy Metalpol Furmaniak" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="http://www.siatki-ogrodzeniowe.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo16} alt="Logo firmy Ogromet" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.porta.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo17} alt="Logo firmy Porta" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.rehau.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo18} alt="Logo firmy Rehau" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://robelit.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo19} alt="Logo firmy Robelit" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://roothkin.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo20} alt="Logo firmy Roothkin" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://wiked.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo21} alt="Logo firmy Wikęd" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.winkhaus.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo22} alt="Logo firmy Wink Haus" />
                  </OutboundLink>
                </div>
                <div>
                  <OutboundLink
                    href="https://www.wisniowski.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo23} alt="Logo firmy Wiśniowski" />
                  </OutboundLink>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Offer
