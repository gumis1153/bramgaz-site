import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Delivers = () => {
  let number = -1
  return (
    <StaticQuery
      query={graphql`
        {
          bramgazApi {
            deliversPhotoses {
              id
              photoTitle
              photo {
                url
              }
            }
          }
        }
      `}
      render={({ bramgazApi: { deliversPhotoses } }) =>
        deliversPhotoses.map(index => (
          <div
            tabindex={number++}
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src={index.photo.url} alt={index.photoTitle + " - dostawca"} />
          </div>
        ))
      }
    />
  )
}

export default Delivers
