import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-bottom: 96px;
  padding-top: 56px;
  display: grid;
  gap: 64px;
  grid-template-rows: auto auto;

  &:before {
    content: '';
    border-top: 1px solid var(--c-gray-lighter);
  }

  .page-links {
    display: grid;
    grid-template-columns: 3fr 1fr;

    .links-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .links-list {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 18px;
        margin-top: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--c-gray);
      }

      a {
        font-size: 16px;
        color: var(--c-gray-light);
        transition: color 100ms ease-in;

        &:hover {
          color: var(--c-gray);
        }

        &:not(:last-of-type) {
          margin-bottom: 16px;
        }

        span {
          @extend .badge !optional;
        }

        @media (max-width: 700px) {
          span {
            display: none;
          }
        }
      }
    }

    .scroll-button {
      text-align: right;

      button {
        color: var(--c-gray);
        padding-right: 0;
        padding-left: 10px;
        padding-bottom: 10px;
      }
    }
  }

  .social-links {
    display: flex;

    a {
      height: 2.2rem;
      min-width: 2.3rem;
      border-radius: var(--radius-6);
      color: var(--c-gray);
      background-color: var(--c-gray-lightest);
      transition: color, background-color 200ms ease-in;
      justify-content: center;
      align-items: center;
      display: flex;

      &:hover {
        color: var(--c-gray);
        background-color: var(--c-gray-lighter);
      }

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
`;
