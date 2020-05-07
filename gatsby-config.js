module.exports = {
  siteMetadata: {
    title: "Zafar Ali's Portfolio",
    author: 'Zafar Ali',
    description: "Zafar Ali's Portfolio",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Zafar Ali's Portfolio",
        short_name: "Zafar's Portfolio",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
