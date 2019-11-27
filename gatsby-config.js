module.exports = {
  siteMetadata: {
    title: `Bramgaz | Leszno - Bramy. Drzwi. Napędy. Okna`,
    description: `Bramy, drzwi, napędy, okna. ul. Chociszewskiego 37a, 64-100 Leszno`,
    author: `piotrjakubowski.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin-ext`],
            variants: [`400`, `500`],
          },
          {
            family: `Quicksand`,
            subsets: [`latin-ext`],
            variants: [`400`, `500`],
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "bramgazApi",
        fieldName: "bramgazApi",
        url:
          "https://api-euwest.graphcms.com/v1/ck2yzig7o0agh01fbdg2696we/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
