import styled from 'styled-components/native';
import { TypographyProps } from '.';

export const H2 = styled.Text<TypographyProps>`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
`