module.exports = {
  pathPrefix: `/test`,
  siteMetadata: {
    title: `Bramgaz | Leszno - Bramy. Drzwi. Napędy. Okna`,
    description: `Bramy, drzwi, napędy, okna. ul. Chociszewskiego 37a, 64-100 Leszno`,
    author: `piotrjakubowski.pl`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      icon: `src/images/favicon.png`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald\:400,500`, `Quicksand\:400,500`],
        display: "swap",
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
  ],
}
