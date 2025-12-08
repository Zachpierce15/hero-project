'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import styled from "styled-components"

gsap.registerPlugin(Flip);

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

const StyledFlipContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const CardAndQuote = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const container = containerRef.current;
        if (!button || !container) return;

        const doFlip = () => {
            const eventElements = container.querySelectorAll('.event') as NodeListOf<HTMLElement>;
            const squares = Array.from(eventElements);

            if (squares.length < 2) return;
            const state = Flip.getState(squares);
            swap(squares);

            Flip.from(state, { duration: .8, ease: 'power1.inOut' });
        };

        const swap = ([a, b]: HTMLElement[]) => {
            const parent = a.parentNode as HTMLElement;
            if (parent.children[0] === a) {
                parent.appendChild(a);
            } else {
                parent.appendChild(b);
            }
        };

        button.addEventListener('mouseenter', doFlip);

        return () => {
            button.removeEventListener('mouseenter', doFlip);
        };
    }, []);

    return (
        <ContainerDiv>
            <InfoCardCouroselAndGetQuoteContainers>Cards carousel</InfoCardCouroselAndGetQuoteContainers>
            <InfoCardCouroselAndGetQuoteContainers style={{ height: '206px' }} ref={containerRef}>
                <StyledParagraph>
                    Join hundreds of businesses who trust Arlo to offer health insurance that works the way it should:
                    affordable coverage that puts employees and their doctors in the driving seat.
                </StyledParagraph>
                <StyledFlipContainer>
                    <div className='event'>Element to swap places</div>
                    <button className='event' ref={buttonRef}>Get a Custom Quote Today</button>
                </StyledFlipContainer>
            </InfoCardCouroselAndGetQuoteContainers>
        </ContainerDiv>
    )
}