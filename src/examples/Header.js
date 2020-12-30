import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    site {
      siteMetadata {
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

const Header = () => {
  const {
    site: {
      siteMetadata: {
        person: { name },
      },
    },
  } = useStaticQuery(getData);
  // return <div>{data.site.siteMetadata.author}</div>
  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default Header;
