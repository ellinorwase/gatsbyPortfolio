/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
console.log(`HÄR:  ${__dirname}/src/images` );

module.exports = {
  /* Your site config here */
    plugins: [
      // Typography
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        },
        // Image
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // Google Analytict
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {     
            trackingId: "UA-146676054-1"
          }
        },
        // SVG-pics
        // {
        //   resolve: "gatsby-plugin-react-svg",
        //   options: {
        //     rule: {
        //       include: /assets/ // See below to configure properly
        //     }
        //   }
        // }
      ],
      
      
  
}
