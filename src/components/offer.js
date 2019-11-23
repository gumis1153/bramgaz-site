import React, { Component } from "react"
import "../styles/offer.css"

// import { StaticQuery, graphql } from "gatsby"
// import SimpleSwiper from "./SimpleSwiper"
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
    const params = {
      autoplay: {
        delay: 2000,
      },
      // setWrapperSize: true,
      roundLengths: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
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
            <div className="deliversSlider"> </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Offer
