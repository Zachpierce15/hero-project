'use client'
import styled from 'styled-components'
import { useWindowSize } from "./hooks/useWindowSize";
// import {CardCarousel} from './components/CardCarousel'
import { CardAndQuote } from './components/CardsAndQuote'
import { Title } from './components/Title'

const StyledPageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;


  @media (max-width: 500px) {
    padding: 0 16px;
  }
`

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

  const isMobile = width !== undefined && width <= 999
  return (
    <StyledPageContainer>
      <StyledAppContainer>
        <div>
          <Title isMobile={isMobile} />
        </div>
        <CardAndQuote />
      </StyledAppContainer>
    </StyledPageContainer>
  );
}
