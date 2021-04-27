import styled from 'styled-components/native';
import { TypographyProps } from '.';


export const H1 = styled.Text<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
`
