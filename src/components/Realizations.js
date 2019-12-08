import React, { Component } from "react"

import Gallery from "react-grid-gallery"
import "../styles/realizations.css"

let IMAGES = []

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
              // thumbnailWidth: 320,
              // thumbnailHeight: 174,
              alt: i.description,
              imageCountSeparator: `z`,
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
              <Gallery
                images={IMAGES}
                enableImageSelection={false}
                // lightboxWidth={100}
                rowHeight={200}
              />
            ) : null}
          </div>
        </div>
      </section>
    )
  }
}

export default Realizations
