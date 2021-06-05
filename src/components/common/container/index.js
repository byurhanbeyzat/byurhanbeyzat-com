import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--width-base);
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${({ small }) => {
    if (small) {
      return css`
        max-width: var(--width-sm);
      `;
    }
  }}

  ${({ large }) => {
    if (large) {
      return css`
        max-width: var(--width-lg);
      `;
    }
  }}
`;
