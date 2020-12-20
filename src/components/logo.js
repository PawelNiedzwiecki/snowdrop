import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { siteShortTitle } from "../../config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color};

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  &:hover {
    color: ${({ theme, hoverColor }) => theme.colors[hoverColor] || hoverColor};
  }
`

const Logo = ({ size, color, hoverColor }) => (
  <StyledLogo color={color} size={size} hoverColor={hoverColor}>
    {siteShortTitle}
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
}

export default Logo
