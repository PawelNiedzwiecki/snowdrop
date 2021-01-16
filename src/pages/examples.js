import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import GlobalStateProvider from '../context/provider';
import Layout from '../components/layout';

const getImages = graphql`
  {
    file(sourceInstanceName: { eq: "images" }, name: { eq: "nature" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Examples = ({ data }) => {
  const {
    file: {
      childImageSharp: { fixed, fluid },
    },
  } = useStaticQuery(getImages);
  const globalState = {
    isIntroDone: true,
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <h1>Hello examples page</h1>
        <img src={fixed.src} />
        <Img fixed={fixed} />
        <Img fluid={fluid} />
        <Header />
        <HeaderStatic />
      </Layout>
    </GlobalStateProvider>
  );
};

Examples.propTypes = {
  data: PropTypes.object,
};

export default Examples;
