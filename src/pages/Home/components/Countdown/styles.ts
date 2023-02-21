import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 8rem;
  }

  @media (max-width: 560px) {
    font-size: 7rem;
    height: 11rem;

    span {
      padding: 1rem 0.5rem;
      line-height: 9rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 6rem;
    height: 10rem;

    span {
      padding: 1rem 0.5rem;
      line-height: 8rem;
    }
  }

  @media (max-width: 375px) {
    font-size: 5rem;
    height: 9rem;

    span {
      padding: 1rem 0.5rem;
      line-height: 7rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 4rem;
    height: 8rem;

    span {
      padding: 1rem 0.5rem;
      line-height: 6rem;
    }
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 8rem;
    width: 3rem;
  }

  @media (max-width: 560px) {
    font-size: 7rem;
    width: 2rem;
    line-height: 7rem;
  }

  @media (max-width: 425px) {
    font-size: 6rem;
    width: 1.5rem;
    line-height: 6rem;
  }

  @media (max-width: 375px) {
    font-size: 5rem;
    width: 1rem;
    line-height: 5rem;
  }

  @media (max-width: 375px) {
    font-size: 4rem;
    width: 1rem;
    line-height: 4rem;
  }
`
