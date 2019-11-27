import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/offer.css"

import OfferIndividuals from "./offerIndividuals"
import OfferIndustry from "./offerIndustry"

import logo1 from "../logos/aluplast.gif"
import logo2 from "../logos/asilo.png"
import logo3 from "../logos/beninca.png"
import logo4 from "../logos/classen-logo.jpg"
import logo5 from "../logos/dierre.jpg"
import logo6 from "../logos/gealan.gif"
import logo7 from "../logos/himotions.jpg"
import logo8 from "../logos/hormann-logo.png"
import logo9 from "../logos/krispol_logo.png"
import logo10 from "../logos/loading-system.png"
import logo11 from "../logos/logo_bigtor.jpg"
import logo12 from "../logos/logo-Cal.png"
import logo13 from "../logos/logo-polfendo.png"
import logo14 from "../logos/marantec.png"
import logo15 from "../logos/metalpol.jpg"
import logo16 from "../logos/ogromet.png"
import logo17 from "../logos/porta_drzwi.png"
import logo18 from "../logos/rehau.png"
import logo19 from "../logos/robelit.gif"
import logo20 from "../logos/roothkin.png"
import logo21 from "../logos/wikend-n.jpg"
import logo22 from "../logos/winkhaus.jpg"
import logo23 from "../logos/wisniowski-logo.png"

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

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
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
                  <img src={logo1} alt="" />
                </div>
                <div>
                  <img src={logo2} alt="" />
                </div>
                <div>
                  <img src={logo3} alt="" />
                </div>
                <div>
                  <img src={logo4} alt="" />
                </div>
                <div>
                  <img src={logo5} alt="" />
                </div>
                <div>
                  <img src={logo6} alt="" />
                </div>
                <div>
                  <img src={logo7} alt="" />
                </div>
                <div>
                  <img src={logo8} alt="" />
                </div>
                <div>
                  <img src={logo9} alt="" />
                </div>
                <div>
                  <img src={logo10} alt="" />
                </div>
                <div>
                  <img src={logo11} alt="" />
                </div>
                <div>
                  <img src={logo12} alt="" />
                </div>
                <div>
                  <img src={logo13} alt="" />
                </div>
                <div>
                  <img src={logo14} alt="" />
                </div>
                <div>
                  <img src={logo15} alt="" />
                </div>
                <div>
                  <img src={logo16} alt="" />
                </div>
                <div>
                  <img src={logo17} alt="" />
                </div>
                <div>
                  <img src={logo18} alt="" />
                </div>
                <div>
                  <img src={logo19} alt="" />
                </div>
                <div>
                  <img src={logo20} alt="" />
                </div>
                <div>
                  <img src={logo21} alt="" />
                </div>
                <div>
                  <img src={logo22} alt="" />
                </div>
                <div>
                  <img src={logo23} alt="" />
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
