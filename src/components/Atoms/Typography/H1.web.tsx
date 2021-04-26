import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '.';

export const H1 = styled.h1<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  margin: 0
`