'use client'

import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const StyledIframeDiv = styled.div`
  & iframe {
    width: 100%;
  }
`;

const StyledIframe = ({iframe}: { iframe: string }) => {
  return (
    <StyledIframeDiv className="my-8 w-full">
      {parse(iframe)}
    </StyledIframeDiv>
  );
}

export default StyledIframe
