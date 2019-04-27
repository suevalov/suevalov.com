const config = require('./config');

let contentfulConfig;

try {
  // eslint-disable-next-line
  contentfulConfig = require('./.contentful');
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST,
    },
  };
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}/logos/logo-512x512.png`,
      author: config.userName,
      copyright: '© Alex Suevalov',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 600,
              ratio: 1.77,
            },
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-emojis',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        ...(process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production),
      },
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-twitter',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortSiteTitle,
        description: config.siteDescription,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
  ],
};
