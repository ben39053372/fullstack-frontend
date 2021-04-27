import styled from 'styled-components';
import { TypographyProps } from '.';

export const H4 = styled.h4<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  margin: 0
`