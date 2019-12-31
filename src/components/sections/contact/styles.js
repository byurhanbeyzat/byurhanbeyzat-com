import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: var(--space-sm);
`

export const Text = styled.p`
  color: var(--grey500);
  margin-top: 0;
  margin-bottom: var(--space-sm);
`

export const IconsWrapper = styled.div`
  margin-top: var(--space-sm);
  margin-bottom: var(--space-xl);
`

export const IconsList = styled.ul`
  display: flex;
  place-items: center;
  justify-content: center;
`

export const IconsItem = styled.li`
  &:not(:last-child) {
    margin-right: var(--space-lg);
  }

  a {
    color: var(--dark);
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      color: var(--dark);
    }

    svg {
      fill: currentColor;
      transition: all 200ms ease;

      &:hover {
        transition: all 200ms ease;
        transform: scale(1.2);
      }
    }
  }
`