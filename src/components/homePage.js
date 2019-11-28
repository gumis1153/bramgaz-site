import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import img1 from "../images/home1.jpg"
import img2 from "../images/home2.jpg"
import img3 from "../images/home3.jpg"
import img4 from "../images/home4.jpg"
import img5 from "../images/home5.jpg"
import "react-awesome-slider/dist/styles.css"

import "../styles/homePage.css"

const AutoplaySlider = withAutoplay(AwesomeSlider)

class homePage extends Component {
  state = {}

  render() {
    return (
      <section className="homePage" id="start">
        <div className="bgcBlurr">
          <div className="wrapper">
            <div className="headerHeight"></div>
            <div className="homePageContent">
              <div className="blueRectangle"></div>
              <div className="yellowRectangle"></div>
              <div></div>
              <div>
                <h1>
                  <span>B</span>ramy
                </h1>
              </div>
              <div>
                <h1>
                  <span>O</span>kna
                </h1>
              </div>
              <div>
                <h1>
                  <span>D</span>rzwi
                </h1>
              </div>
              <div>
                <p>To nasza specjalność</p>
              </div>
              <div>
                <button
                  className="homePageButton"
                  onClick={() => {
                    document.querySelector("section.about").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }}
                >
                  Czytaj więcej
                </button>
              </div>
              <div className="homeSlider">
                {/* <StaticQuery
                      query={graphql`
                        {
                          bramgazApi {
                            homeSliders {
                              photo {
                                url
                              }
                            }
                          }
                        }
                      `}
                      render={({ bramgazApi: { homeSliders } }) =>
                        homeSliders.map(index => (
                          
                        
                          
                          
                          ))
                      }
                    /> */}
                <div className="homeSliderContainer">
                  <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4000}
                    fillParent={true}
                    bullets={false}
                    className="aws-btn"
                  >
                    <div data-src={img1} />
                    <div data-src={img2} />
                    <div data-src={img3} />
                    <div data-src={img4} />
                    <div data-src={img5} />
                  </AutoplaySlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default homePage
