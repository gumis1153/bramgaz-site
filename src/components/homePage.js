import React, { Component } from "react"
import Sliders from "./sliders"

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
  state = {
    urls: [],
  }

  componentWillMount() {
    this.render()
    this.fetchData()
  }

  fetchData = () => {
    fetch(
      "https://api-euwest.graphcms.com/v1/ck2yzig7o0agh01fbdg2696we/master",
      {
        method: "post",
        headers: {
          "gcms-locale": "RB, DE, EN",
          "gcms-locale-no-default": true,
          "Content-Type": "application/json",
        },
        body: '{"query": "{ homeSliders { photo { url } } }"}',
      }
    )
      .then(res => res.json())
      .then(data => {
        let urls = []
        // console.log(data.values())
        const dataArray = Object.keys(data).map(i => data[i])
        dataArray.forEach(item => {
          item.homeSliders.map(i => {
            urls.push(i.photo.url)
            // console.log(urls)
          })
          this.setState({
            urls: urls,
          })
          // console.log(`State: ${this.state.urls}`)
          // const urlsObj = { ...urls }
          // console.log(urlsObj)
          // console.log(item.homeSliders)
        })
        this.setState({
          urls: urls,
        })
        // console.log(`State to: ${this.state.urls}`)
      })
      .catch(function(error) {
        console.log(error)
      })
    this.render()
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
                <div className="homeSliderContainer">
                  <AutoplaySlider
                    className="AutoplaySliderContainer"
                    {...options}
                  >
                    {/* <Sliders urls={this.state} /> */}
                    {/* {console.log(this.state.urls)} */}
                    {/* <Autoplay /> */}
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
