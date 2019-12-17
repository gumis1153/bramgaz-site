import React, { Component } from "react"
import { Link } from "react-scroll"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import img1 from "../images/home1.jpg"
import img2 from "../images/home2.jpg"
import img3 from "../images/home3.jpg"
import img4 from "../images/home4.jpg"
import img5 from "../images/home5.jpg"
import "react-awesome-slider/dist/styles.css"

import "../styles/homePage.css"

const AutoplaySlider = withAutoplay(AwesomeSlider)

class homePage extends Component {
  state = {
    urls: [],
  }

  render() {
    const options = {
      play: true,
      cancelOnInteraction: false,
      interval: 4000,
      fillParent: true,
      bullets: false,
      className: "aws-btn",
    }
    const LinkOptions = {
      activeClass: "activeButton",
      spy: true,
      smooth: true,
      offset: -80,
      duration: 600,
    }

    return (
      <section className="homePage" id="start">
        {" "}
        <StaticQuery
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "bgc.jpg" }) {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
              <BackgroundImage
                Tag="div"
                className={`BackgroundImage `}
                fluid={imageData}
                backgroundColor={`#040e18`}
              >
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
                        <Link {...LinkOptions} to="about">
                          <button className="homePageButton">
                            Czytaj więcej
                          </button>
                        </Link>
                      </div>
                      <div className="homeSlider">
                        <div className="homeSliderContainer">
                          <AutoplaySlider
                            className="AutoplaySliderContainer"
                            {...options}
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
              </BackgroundImage>
            )
          }}
        />
      </section>
    )
  }
}

export default homePage
