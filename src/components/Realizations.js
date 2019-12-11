import React, { Component } from "react"

// import Gallery from "react-grid-gallery"
import Gallery from "react-photo-gallery"
import "../styles/realizations.css"

let photos = []

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
        body:
          '{"query": "{ galleries { description, photo { url, width, height } } }"}',
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
              width: `${i.photo.width}`,
              height: `${i.photo.height}`,
              // sizes: "100%",
              // thumbnail: `${i.photo.url}`,
              // thumbnailWidth: 272,
              // thumbnailHeight: auto,
              // alt: i.description,
              // imageCountSeparator: `z`,
            })
            // console.log(arr)

            photos = arr
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

  columns(containerWidth) {
    let columns = 1
    if (containerWidth >= 500) columns = 2
    if (containerWidth >= 900) columns = 3
    if (containerWidth >= 1024) columns = 4
    return columns
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
                photos={photos}
                direction="column"
                // columns={1}
                columns={this.columns}
              />
            ) : null}
          </div>
        </div>
      </section>
    )
  }
}

export default Realizations
