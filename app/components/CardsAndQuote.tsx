'use client'
import styled from "styled-components"

const CardAndQuoteContainer = styled.div`
    border: 1px solid #CCDDC7;
    border-radius: 12px;
`
export const CardAndQuote = () => {
    return (
        <CardAndQuoteContainer>
            <div>Cards carousel</div>
            <div>Text for businesses with a button</div>
        </CardAndQuoteContainer>)
}