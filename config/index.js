module.exports = {
  //-- SITE SETTINGS -----
  author: '@pawelniedzwiecki',
  authorLink: 'https://github.com/PawelNiedzwiecki',
  siteTitle: 'Snowdrop - make up artist',
  siteShortTitle: 'Snowdrop', // Used as logo text in header, footer, and splash screen
  siteDescription: 'Snowdrop maked up artist based in UK',
  siteUrl: 'https://snowdrop.pl',
  siteLanguage: 'en_GB',
  siteIcon: 'content/favicon.png', // Relative to gatsby-config file
  seoTitleSuffix: 'Snowdrop', // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: '#FB4849',
      secondary: '#E199A0',
      tertiary: '#FAB7A8',
      text: '#000000',
      subtext: '#555555',
      background: '#ffffff',
      card: '#FFFFFF',
      scrollBar: 'rgba(0, 0, 0, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
    darkTheme: {
      primary: '#FAFAFA',
      secondary: '#08B1AA',
      tertiary: '#252525',
      text: 'rgba(255, 255, 255, 0.87)',
      subtext: '#AAAAAA',
      background: '#121212',
      card: '#1C1C1C',
      scrollBar: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
  },
  fonts: {
    primary: 'Roboto, Arial, sans-serif',
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster',
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/snowdropmakeup/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/SnowDrop-Makeup-105157127686514',
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: 'About Me',
        url: '/#about',
      },
      {
        name: 'Services',
        url: '/#services',
      },
      {
        name: 'Portfolio',
        url: '/#instagram',
      },
      // {
      //   name: 'Example',
      //   url: '/examples',
      // },
    ],
    button: {
      name: 'Contact',
      url: '/#contact',
    },
  },
  footerLinks: [
    {
      name: 'Privacy',
      url: '/privacy',
    },
    {
      name: 'Imprint',
      url: '/imprint',
    },
  ],

  //-- CONTACT FORM ------
  contactForm: [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Email',
      type: 'email',
    },
    {
      name: 'Subject',
      type: 'text',
    },
    {
      name: 'Message',
      type: 'textarea',
    },
  ],
};
