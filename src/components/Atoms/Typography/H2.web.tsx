import styled from 'styled-components';
import { TypographyProps } from '.';

export const H2 = styled.h2<TypographyProps>`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  margin: 0;
`;
