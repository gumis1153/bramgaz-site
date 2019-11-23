import React from "react"
import { StaticQuery, graphql } from "gatsby"

const OfferIndustry = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          bramgazApi {
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
      render={({ bramgazApi: { photosIndustries } }) =>
        photosIndustries.map(index => (
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
  )
}

export default OfferIndustry
