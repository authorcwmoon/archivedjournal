module.exports = {
  siteMetadata: {
    title: "The Journal of C.W. Moon",
    description: "The frequency of stories",
    url: "https://cwmoon.com",
    image:"/office.jpg",
    twitterUsername: "@cwill44",
    author: "C.W. Moon",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,

    },


    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },

    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Libre Baskerville`, `serif\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
}