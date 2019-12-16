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
  ],
}
