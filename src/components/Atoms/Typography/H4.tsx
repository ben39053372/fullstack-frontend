import styled from 'styled-components/native';
import { TypographyProps } from '.';

export const H4 = styled.Text<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`