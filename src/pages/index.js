import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GlobalStateProvider from '../context/provider';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
// import Articles from '../components/sections/articles';
import About from '../components/sections/about';
// import Interests from '../components/sections/interests';
import Projects from '../components/sections/projects';
// import Instagram from '../components/sections/instagram';
import Contact from '../components/sections/contact';
import { seoTitleSuffix } from '../../config';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.nodes[0];
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter;

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
        />
        <Hero content={data.hero.nodes} />
        <About content={data.about.nodes} />
        {/* <Interests content={data.interests.nodes} /> */}
        <Projects content={data.projects.nodes} />
        {/* <Tutorial content={data.projects.nodes} /> */}
        {/* <Instagram content={data.instagram.nodes} /> */}
        <Contact content={data.contact.nodes} />
      </Layout>
    </GlobalStateProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      nodes {
        frontmatter {
          seoTitle
          useSeoTitleSuffix
          useSplashScreen
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/index/hero/" } }) {
      nodes {
        body
        frontmatter {
          greetings
          title
          subtitlePrefix
          subtitle
          icon {
            childImageSharp {
              gatsbyImageData(width: 60, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
    about: allMdx(filter: { fileAbsolutePath: { regex: "/index/about/" } }) {
      nodes {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
    interests: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/interests/" } }
    ) {
      nodes {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                gatsbyImageData(
                  width: 20
                  height: 20
                  quality: 90
                  layout: FIXED
                )
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      nodes {
        body
        frontmatter {
          title
          category
          emoji
          screenshot {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
          position
          buttonVisible
          buttonUrl
          buttonText
        }
      }
    }
    contact: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/contact/" } }
    ) {
      nodes {
        body
        frontmatter {
          title
          name
          email
          profileImage {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

// instagram: allInstaNode(
//   limit: 10
//   sort: { fields: timestamp, order: DESC }
// ) {
//   nodes {
//     localFile {
//       childImageSharp {
//         gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
//       }
//     }
//     id
//   }
// }
