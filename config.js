module.exports = {
  siteTitle: "Alex Suevalov | Senior Web Developer", // Site title.
  shortSiteTitle: "suevalov.com",
  siteTitleAlt: "Alex Suevalov | Senior Web Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-192x192.png", // Logo used for SEO and manifest.
  siteUrl: "https://suevalov.com", // Domain of your website without pathPrefix.
  siteDescription:
    "Alex Suevalov's personal website and blog about programming", // Website description used for RSS feeds/meta description tag.
  siteRss: "/blog/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-112843005-1", // GA tracking ID.
  userName: "Alex Suevalov", // Username to display in the author segment.
  userTwitter: "suevalov", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Wroclaw, Poland", // User location to display in the author segment.
  userAvatar: "/images/suevalov-100.jpg", // User avatar to display in the author segment.
  userDescription: "Passionate about making complex things simple.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "suevalov.me@gmail.com",
      href: "mailto:suevalov.me@gmail.com",
      type: "gmail"
    },
    {
      label: "Twitter",
      href: "https://twitter.com/suevalov",
      type: "twitter"
    },
    {
      label: "GitHub",
      href: "https://github.com/suevalov",
      type: "github"
    },
    {
      label: "Instagram",
      href: "https://instagram.com/suevalov",
      type: "instagram"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexander-suevalov-748b6731/",
      type: "linkedin"
    }
  ],
  techInterestedIn: [
    {
      label: "React",
      href: "https://reactjs.org"
    },
    {
      label: "React Native",
      href: "https://facebook.github.io/react-native/"
    },
    {
      label: "Reason",
      href: "https://reasonml.github.io"
    },
    {
      label: "Kotlin",
      href: "https://kotlinlang.org/"
    },
    {
      label: "GraphQL",
      href: "http://graphql.org/"
    }
  ],
  themeColor: "#89bcfe", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
