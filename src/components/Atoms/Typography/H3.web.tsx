import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '.';

export const H3 = styled.h3<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  margin: 0
`