'use client'
import styled from "styled-components"

const InfoCardCouroselAndGetQuoteContainers = styled.div`
    border: 1px solid #CCDDC7;

      @media (max-width: 500px) {
            width: 85vw;
            height: 190px;
      }
`

const ContainerDiv = styled.div`
     @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 65px;
      }
`

const StyledParagraph = styled.p`
     @media (max-width: 500px) {
            font-size: 14px;
            margin: 10px 10px 10px 10px;
      }
`
export const CardAndQuote = () => {

    return (
        <ContainerDiv>
            <InfoCardCouroselAndGetQuoteContainers>Cards carousel</InfoCardCouroselAndGetQuoteContainers>
            <InfoCardCouroselAndGetQuoteContainers style={{ height: '206px' }}>
                <StyledParagraph>
                    Join hundreds of businesses who trust Arlo to offer health insurance that works the way it should:
                    affordable coverage that puts employees and their doctors in the driving seat.
                </StyledParagraph>
                <div>
                    <div>ELement to swap places</div>
                    <button onClick={() => console.log('hello')}>Get a Custom Quote Today</button>
                </div>
            </InfoCardCouroselAndGetQuoteContainers>
        </ContainerDiv>)
}