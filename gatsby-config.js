/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  /* Your site config here */
    plugins: [
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: path.join(__dirname, `src`, `images`),
          },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {     
            trackingId: "UA-146676054-1"
          }
        }
        // },
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingID: "UA-146676054-1",
        //   }
        // }
      
      ],
      
      
  
}
