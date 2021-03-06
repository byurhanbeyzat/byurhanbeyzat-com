import styled from 'styled-components'
import { mixins } from 'styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: var(--white);
  ${mixins.flexAlignCenter};

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: ${p =>
    p.isNavActive === false && p.scrollDirection === 'none'
      ? 'var(--nav-height)'
      : 'var(--nav-scroll-height)'};
  box-shadow: ${p =>
    p.isNavActive === false && p.scrollDirection === 'up'
      ? `${mixins.boxShadow}`
      : 'none'};
  transform: translateY(
    ${p =>
      p.isNavActive === false && p.scrollDirection === 'down' ? '-80px' : '0px'}
  );

  & > div {
    max-width: 1280px;
    ${mixins.flexBetween};
    padding: 0 var(--space-xs);
  }
`

export const Logo = styled.div`
  z-index: 11;
  color: var(--white);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -1.3px;
  mix-blend-mode: difference;
`

export const NavButton = styled.button`
  padding: 14px 0 14px 16px;
  outline: 0;
  z-index: 20;
  cursor: pointer;
  mix-blend-mode: difference;
  background-color: rgba(var(--white), 0);

  &:before,
  &:after {
    display: block;
    content: '';
    width: 22px;
    height: 2px;
    background-color: var(--white);
    transition: all 200ms ease-in;
  }

  &:before {
    transform: rotate(0deg) translate(0, -3px);
  }

  &:after {
    transform: rotate(0deg) translate(0, 3px);
  }

  ${({ isActive }) =>
    isActive &&
    `
    &:before {
      transform: rotate(45deg) translate(2px, 0px);
    }

    &:after {
      transform: rotate(-45deg) translate(1px, 0px);
    }
  `}
`
