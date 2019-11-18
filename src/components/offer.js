import React, { Component } from "react"
import "../styles/offer.css"
import { FaChevronRight, FaChevronLeft, FaSyncAlt } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"

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
    const switchAnim = () => {
      console.log("animacja")
    }
    return (
      <section className="offer">
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
              <StaticQuery
                query={graphql`
                  {
                    bramgazApi {
                      photosIndividuals {
                        id
                        photoTitle
                        photo {
                          url
                        }
                      }
                      photosIndustries {
                        id
                        photoTitle
                        photo {
                          url
                        }
                      }
                    }
                  }
                `}
                render={({
                  bramgazApi: { photosIndividuals, photosIndustries },
                }) =>
                  this.state.clientType == "individual"
                    ? photosIndividuals.map(index => (
                        <div key={index.id} className="offerContainer">
                          <img
                            alt={index.photoTitle + " - oferta"}
                            src={index.photo.url}
                          ></img>
                          <span>{index.photoTitle}</span>
                        </div>
                      ))
                    : photosIndustries.map(index => (
                        <div key={index.id} className="offerContainer">
                          <img
                            alt={index.photoTitle + " - oferta"}
                            src={index.photo.url}
                          ></img>
                          <span>{index.photoTitle}</span>
                        </div>
                      ))
                }
              />
            </div>
            <div className="deliversSlider">
              <FaChevronLeft className="blue" />
              <FaChevronRight className="blue" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Offer
