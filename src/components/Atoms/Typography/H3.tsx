import styled from 'styled-components/native';
import { TypographyProps } from '.';

export const H3 = styled.Text<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
`