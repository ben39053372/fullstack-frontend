import styled from 'styled-components/native';
import { TypographyProps } from '.';

export const H5 = styled.Text<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`
