require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Richelle Billones`,
    description: `Full Stack Developer in Houston, TX.`,
    author: `Richelle`,
    url: "https://richelleb.dev",
    image: "static/thumbnail.jpg"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `portfolio-assets`,
        context: true,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-use-dark-mode`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `portfolio-assets`,
    //     context: true,
    //   }
    // },
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
        name: `portfolio-v2`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#F8F6F1`,
        theme_color: `#AF4448`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/portfolio-logo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `anonymous`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oxygen\:300,700`,
          `noto serif\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          showFooter: false,
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
