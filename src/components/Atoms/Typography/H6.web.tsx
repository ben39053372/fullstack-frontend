import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '.';

export const H6 = (props: TypographyProps) => {
  return <StyledH6>{props.children}</StyledH6>;
};

const StyledH6 = styled.h6`
  font-size: 1rem;
`;
