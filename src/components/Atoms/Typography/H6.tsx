import styled from 'styled-components/native';
import { TypographyProps } from '.';

export const H6 = styled.Text<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`