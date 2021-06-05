import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    padding: 0.75rem;
    backdrop-filter: blur(1rem);
    background-color: rgba(var(--c-theme), 0.8);
  }

  a {
    font-size: 16px;
    font-weight: 400;
    margin-right: 28px;
  }
`;

export const ThemeButton = styled.button`
  width: 38px;
  height: 38px;
  cursor: pointer;
  color: var(--c-gray);
  background-color: var(--c-gray-lightest);
  transition: background-color 170ms ease-in;
  border-radius: var(--radius-6);

  &:hover {
    background-color: var(--c-gray-lighter);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
