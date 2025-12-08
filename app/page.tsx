'use client'
import styled from 'styled-components'
import { useWindowSize } from "./hooks/useWindowSize";
// import {CardCarousel} from './components/CardCarousel'
import { CardAndQuote } from './components/CardsAndQuote'
import { Title } from './components/Title'

const StyledAppContainer = styled.h1`
display: flex;
justify-content: center;
margin-top: 150px;
flex-direction: column;

  @media (max-width: 500px) {
        justify-content: unset;
        margin-top: 85px;
        
}
`


export default function Home() {
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 500
  return (
    <StyledAppContainer>
      <div>
        <Title isMobile={isMobile} />
      </div>
      <CardAndQuote />
    </StyledAppContainer>
  );
}
