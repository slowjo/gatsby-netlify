/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "TheBlog",
    description: "This is a blog about stuff.",
    keywords: "blog, stuff, about",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `thebloggiblog.com`,
        protocol: `https`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "WordpressPost",
        imagePath: "source_url",
        // OPTIONAL: Name you want to give new image field on the node.
        // Defaults to 'localImage'.
        name: "allItemImages",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TheJovialSwanson`,
        short_name: `Swanson`,
        start_url: `/`,
        background_color: `#4169e1`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
