import React, { Component } from "react"
import "../styles/offer.css"

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
    return (
      <section className="offer">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1>Oferta</h1>
          </div>
          <div className="offerMain">
            <div className="clientTypeButtons">
              <button
                onClick={this.handleIndividualBtn}
                className={
                  "clientBtn" +
                  (this.state.clientType == "individual" ? " active" : "")
                }
              >
                Dla klienta indywidualnego
              </button>
              <button
                onClick={this.handleIndustryBtn}
                className={
                  "clientBtn" +
                  (this.state.clientType == "industry" ? " active" : "")
                }
              >
                Dla przemysłu
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Offer
