import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/offer.css"

import OfferIndividuals from "./offerIndividuals"
import OfferIndustry from "./offerIndustry"

import logo1 from "../static/logos/aluplast.gif"
import logo2 from "../static/logos/asilo.png"
import logo3 from "../static/logos/beninca.png"
import logo4 from "../static/logos/classen-logo.jpg"
import logo5 from "../static/logos/dierre.jpg"
import logo6 from "../static/logos/gealan.gif"
import logo7 from "../static/logos/himotions.jpg"
import logo8 from "../static/logos/hormann-logo.png"
import logo9 from "../static/logos/krispol_logo.png"
import logo10 from "../static/logos/loading-system.png"
import logo11 from "../static/logos/logo_bigtor.jpg"
import logo12 from "../static/logos/logo-Cal.png"
import logo13 from "../static/logos/logo-polfendo.png"
import logo14 from "../static/logos/marantec.png"
import logo15 from "../static/logos/metalpol.jpg"
import logo16 from "../static/logos/ogromet.png"
import logo17 from "../static/logos/porta_drzwi.png"
import logo18 from "../static/logos/rehau.png"
import logo19 from "../static/logos/robelit.gif"
import logo20 from "../static/logos/roothkin.png"
import logo21 from "../static/logos/wikend-n.jpg"
import logo22 from "../static/logos/winkhaus.jpg"
import logo23 from "../static/logos/wisniowski-logo.png"

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
                  <a
                    href="https://www.aluplast.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo1} alt="Logo firmy Aluplast" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://asilo.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo2} alt="Logo firmy Asilo" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://beninca.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo3} alt="Logo firmy Beninca" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://classen.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo4} alt="Logo firmy Classen" />
                  </a>
                </div>
                <div>
                  <a
                    href="http://dierre.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo5} alt="Logo firmy Dierre" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.gealan.de/pl/gealan-fenster-systeme-gmbh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo6} alt="Logo firmy Gealan" />
                  </a>
                </div>
                <div>
                  <a
                    href="http://himotions.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo7} alt="Logo firmy Hi Motions" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.hormann.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo8} alt="Logo firmy Hormann" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://krispol.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo9} alt="Logo firmy Krispol" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.loading-systems.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo10} alt="Logo firmy Loading System" />
                  </a>
                </div>
                <div>
                  <a
                    href="http://www.bigtor.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo11} alt="Logo firmy Big Tor" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.drzwi-cal.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo12} alt="Logo firmy Cal" />
                  </a>
                </div>
                <div>
                  <a
                    href="http://www.polfendo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo13} alt="Logo firmy Polfendo" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.marantec.com/pl/strona-startowa.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo14} alt="Logo firmy Marantec" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.metalpol.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo15} alt="Logo firmy Metalpol Furmaniak" />
                  </a>
                </div>
                <div>
                  <a
                    href="http://www.siatki-ogrodzeniowe.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo16} alt="Logo firmy Ogromet" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.porta.com.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo17} alt="Logo firmy Porta" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.rehau.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo18} alt="Logo firmy Rehau" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://robelit.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo19} alt="Logo firmy Robelit" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://roothkin.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo20} alt="Logo firmy Roothkin" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://wiked.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo21} alt="Logo firmy Wikęd" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.winkhaus.com/pl-pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo22} alt="Logo firmy Wink Haus" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.wisniowski.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo23} alt="Logo firmy Wiśniowski" />
                  </a>
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
