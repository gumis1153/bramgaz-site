import React from "react"
import { StaticQuery, graphql } from "gatsby"

const OfferIndividuals = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          bramgazApi {
            photosIndividuals {
              id
              photoTitle
              photo {
                url
              }
            }
          }
        }
      `}
      render={({ bramgazApi: { photosIndividuals } }) =>
        photosIndividuals.map(index => (
          <div key={index.id} className="offerContainer">
            <img
              alt={index.photoTitle + " - oferta"}
              src={index.photo.url}
            ></img>
            <span>{index.photoTitle}</span>
            {/* <span>{index.photo.url}</span> */}
          </div>
        ))
      }
    />
  )
}

export default OfferIndividuals
