import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GlobalStateProvider from '../context/provider';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
import Articles from '../components/sections/articles';
import About from '../components/sections/about';
import Interests from '../components/sections/interests';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import { seoTitleSuffix } from '../../config';

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
              fluid(maxWidth: 60, quality: 90) {
                ...GatsbyImageSharpFluid
              }
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
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
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
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
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
          # external
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
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
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
