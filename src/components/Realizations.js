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

const IMAGES = [
  {
    src: `${img1Max}`,
    thumbnail: `${img1Min}`,
  },
  {
    src: `${img2Max}`,
    thumbnail: `${img2Min}`,
  },
  {
    src: `${img3Max}`,
    thumbnail: `${img3Min}`,
  },
  {
    src: `${img4Max}`,
    thumbnail: `${img4Min}`,
  },
  {
    src: `${img5Max}`,
    thumbnail: `${img5Min}`,
  },
  {
    src: `${img6Max}`,
    thumbnail: `${img6Min}`,
  },
  {
    src: `${img7Max}`,
    thumbnail: `${img7Min}`,
  },
  {
    src: `${img8Max}`,
    thumbnail: `${img8Min}`,
  },
]

class Realizations extends Component {
  state = {}

  render() {
    return (
      <section className="gallery" id="gallery">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1> Realizacje </h1>{" "}
          </div>

          <div className="gallery">
            {/* <StaticQuery
              query={graphql`
                {
                  bramgazApi {
                    galleries {
                      description
                      photo {
                        url
                      }
                    }
                  }
                }
              `}
              render={({ bramgazApi: { galleries } }) =>
                galleries.map(index => (
                  <div className="">
                    <img src={index.photo.url} alt={index.description} />
                  </div>
                ))
              }
            /> */}
            <Gallery images={IMAGES} enableImageSelection={false} />
          </div>
        </div>
      </section>
    )
  }
}

export default Realizations
