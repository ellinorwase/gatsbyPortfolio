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
            trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            anonymize: true,
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
            // Enables Google Optimize using your container Id
            optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // Enables Google Optimize Experiment ID
            experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // Set Variation ID. 0 for original 1,2,3....
            variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // Any additional optional fields
            sampleRate: 5,
            siteSpeedSampleRate: 10,
            cookieDomain: "example.com",
          },
        },
      
      ],
      
      
  
}
