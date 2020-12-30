import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import GlobalStateProvider from '../context/provider';
import Layout from '../components/layout';

const Examples = ({ data }) => {
  const {
    site: {
      info: { title },
    },
  } = data;
  const globalState = {
    isIntroDone: true,
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <h1>Hello examples page</h1>
        <h2>{title}</h2>
        <Header />
        <HeaderStatic />
      </Layout>
    </GlobalStateProvider>
  );
};

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        siteUrl
        title
        person {
          age
          name
        }
      }
    }
  }
`;

Examples.propTypes = {
  data: PropTypes.object,
};

export default Examples;
