// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const Delivers = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         {
//           bramgazApi {
//             delivers {
//               id
//               photoTitle
//               photo {
//                 url
//               }
//             }
//           }
//         }
//       `}
//       render={({ bramgazApi: { delivers } }) =>
//         delivers.map(index => (
//           <div key={index.id} className="offerContainer">
//             <img
//               alt={index.photoTitle + " - oferta"}
//               src={index.photo.url}
//             ></img>
//             <span>{index.photoTitle}</span>
//           </div>
//         ))
//       }
//     />
//   )
// }

// export default Delivers
