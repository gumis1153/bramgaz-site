import React, { Component } from "react"
import "../styles/offer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeft } from '@fortawesome/chevron-left'
import { faRight } from '@fortawesome/chevron-right'

// const leftArrow = faLeft;
// const rightArrow = faRight;

class Offer extends Component {
  state = {
    clientType: "individual",
  }

  handleIndividualBtn = () => {
    this.setState({
      clientType: "individual",
    })
  }

  handleIndustryBtn = () => {
    this.setState({
      clientType: "industry",
    })
  }

  render() {
    return (<section className="offer" >
      <div className="wrapper" >
        <div className="sectionTitle" >
<h1 > Oferta </h1> </div > 
<div className="offerMain">
<div className="clientTypeButtons" >
              <button onClick={
                  this.handleIndividualBtn
                }
                className={
                  "clientBtn" +
                  (this.state.clientType === "individual" ? " active" : "")
                } >
                Dla klienta indywidualnego </button> <button onClick={
                  this.handleIndustryBtn
                }
                  className={
                    "clientBtn" +
                    (this.state.clientType === "industry" ? " active" : "")
                  } >
                  Dla przemysłu </button> </div> <div className="availableOffer" >
                <div className="offerContainer"><img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/08/hormann-brama-drzwi-czyste-powietrze-1-1180x472.jpg"></img> <span> Bramy garażowe </span>
                </div >
                <div className="offerContainer"><img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/08/hormann-brama-drzwi-czyste-powietrze-1-1180x472.jpg"></img> <span> Bramy garażowe </span>
                </div >
                <div className="offerContainer"><img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/08/hormann-brama-drzwi-czyste-powietrze-1-1180x472.jpg"></img> <span> Bramy garażowe </span>
                </div >
                <div className="offerContainer"><img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/08/hormann-brama-drzwi-czyste-powietrze-1-1180x472.jpg"></img> <span> Bramy garażowe </span>
                </div >
                <div className="offerContainer"><img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/08/hormann-brama-drzwi-czyste-powietrze-1-1180x472.jpg"></img> <span> Bramy garażowe </span>
                </div >
              </div> 
          <div className="deliversSlider">
          <FontAwesomeIcon icon={faLeft} />
          <FontAwesomeIcon icon={faRight} />
          </div>
              </div> 
              </div> 
              </section >
        )
      }
      }
      
export default Offer