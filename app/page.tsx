'use client'
import styled from 'styled-components'
// import {CardCarousel} from './components/CardCarousel'
import {Title} from './components/Title'

const StyledAppContainer = styled.h1`
display: flex;
justify-content: center;
margin-top: 150px;

  @media (max-width: 375px) {
        justify-content: unset;
}
`


export default function Home() {
  return (
    <StyledAppContainer>
    
      <Title />
    {/* <CardCarousel /> */}
    </StyledAppContainer>
  );
}
