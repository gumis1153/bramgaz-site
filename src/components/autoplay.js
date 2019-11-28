import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

class Autoplay extends Component {
  state = {
    isLoaded: false,
  }

  render() {
    return (
      <StaticQuery
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
            <div>
              <img src={index.photo.url} />
            </div>
          ))
        }
      />
    )
  }
}

export default Autoplay
