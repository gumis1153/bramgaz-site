import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { render } from "react-dom"
import Gallery from "react-grid-gallery"
import "../styles/realizations.css"

import img1Max from "../gallery/1-max.jpg"
import img1Min from "../gallery/1-min.jpg"
import img2Max from "../gallery/2-max.jpg"
import img2Min from "../gallery/2-min.jpg"
import img3Max from "../gallery/3-max.jpg"
import img3Min from "../gallery/3-min.jpg"
import img4Max from "../gallery/4-max.jpg"
import img4Min from "../gallery/4-min.jpg"
import img5Max from "../gallery/5-max.jpg"
import img5Min from "../gallery/5-min.jpg"
import img6Max from "../gallery/6-max.jpg"
import img6Min from "../gallery/6-min.jpg"
import img7Max from "../gallery/7-max.jpg"
import img7Min from "../gallery/7-min.jpg"
import img8Max from "../gallery/8-max.jpg"
import img8Min from "../gallery/8-min.jpg"

// https://www.gatsbyjs.org/docs/client-data-fetching/
// https://circleci.com/docs/

let IMAGES = [
  // {
  //   src: `${img1Max}`,
  //   thumbnail: `${img1Min}`,
  // },
  // {
  //   src: `${img2Max}`,
  //   thumbnail: `${img2Min}`,
  // },
  // {
  //   src: `${img3Max}`,
  //   thumbnail: `${img3Min}`,
  // },
  // {
  //   src: `${img4Max}`,
  //   thumbnail: `${img4Min}`,
  // },
  // {
  //   src: `${img5Max}`,
  //   thumbnail: `${img5Min}`,
  // },
  // {
  //   src: `${img6Max}`,
  //   thumbnail: `${img6Min}`,
  // },
  // {
  //   src: `${img7Max}`,
  //   thumbnail: `${img7Min}`,
  // },
  // {
  //   src: `${img8Max}`,
  //   thumbnail: `${img8Min}`,
  // },
]

class Realizations extends Component {
  state = {
    isLoaded: false,
  }

  componentDidMount() {
    fetch(
      "https://api-euwest.graphcms.com/v1/ck2yzig7o0agh01fbdg2696we/master",
      {
        method: "post",
        headers: {
          "gcms-locale": "RB, DE, EN",
          "gcms-locale-no-default": true,
          "Content-Type": "application/json",
        },
        body: '{"query": "{ galleries { description, photo { url } } }"}',
      }
    )
      .then(res => res.json())
      .then(data => {
        let arr = []
        const dataArray = Object.keys(data).map(i => data[i])
        // console.log(dataArray)
        dataArray.forEach(item => {
          item.galleries.map(i => {
            arr.push({
              src: `${i.photo.url}`,
              thumbnail: `${i.photo.url}`,
              alt: i.description,
            })
            // console.log(arr)

            IMAGES = arr
            // console.log(typeof IMAGES)
          })
          this.setState({
            isLoaded: true,
          })
        })
      })
      .catch(function(error) {
        console.log(error)
      })
    this.render()
  }

  render() {
    return (
      <section className="gallery" id="gallery">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1> Realizacje </h1>{" "}
          </div>

          <div className="gallery">
            {this.state.isLoaded ? (
              <Gallery images={IMAGES} enableImageSelection={false} />
            ) : null}
          </div>
        </div>
      </section>
    )
  }
}

export default Realizations
