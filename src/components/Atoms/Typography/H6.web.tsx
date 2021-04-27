import styled from 'styled-components';
import { TypographyProps } from '.';

export const H6 = styled.h6<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  margin: 0
`
