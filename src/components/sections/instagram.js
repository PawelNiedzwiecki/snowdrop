import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useOnScreen } from '../../hooks';
import ContentWrapper from '../../styles/contentWrapper';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 0.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 2rem;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const InstagramPostsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 40vw;
  grid-gap: 1em;
  & > :nth-child(6n + 2) {
    grid-column: span 2;
    grid-row: span 2;
  }
  & > :nth-child(6n + 1) {
    grid-column: span 2;
    grid-row: span 1;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 16vw;
    & > :nth-child(6n + 2),
    & > :nth-child(6n + 1) {
      grid-column: auto;
      grid-row: auto;
    }
    & > :nth-child(6n + 3) {
      grid-column: span 1;
      grid-row: span 2;
    }
    & > :nth-child(6n + 2),
    & > :nth-child(6n + 5),
    & > :nth-child(6n + 6) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`;

const StyledInstagramPost = styled.div`
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
  .instagramImage {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-out;
    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      border-radius: ${({ theme }) =>
        parseInt(theme.borderRadius) * 1.5 + 'rem'};
    }
  }
`;

const Instagram = ({ content }) => {
  const tRef = useRef();
  const tOnScreen = useOnScreen(tRef);
  const tVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const instagramPost = (node) => {
    const postLink = `https://www.instagram.com/p/${node.id}/`;
    return (
      <StyledInstagramPost key={node.id}>
        <a href={postLink}>
          <GatsbyImage
            alt=""
            image={node.localFile.childImageSharp.gatsbyImageData}
            className="instagramImage"
          />
        </a>
      </StyledInstagramPost>
    );
  };

  return (
    <StyledSection id="instagram">
      <StyledContentWrapper>
        <h3>Instagram posts</h3>
        <InstagramPostsWrapper
          ref={tRef}
          variants={tVariants}
          animate={tOnScreen ? 'visible' : 'hidden'}
        >
          {content.map((node) => instagramPost(node))}
        </InstagramPostsWrapper>
      </StyledContentWrapper>
    </StyledSection>
  );
};

Instagram.propTypes = { content: PropTypes.array };

export default Instagram;
