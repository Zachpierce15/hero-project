'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import styled from "styled-components"
import { CardCarousel } from './CardCarousel';

gsap.registerPlugin(Flip);

const InfoCardCouroselAndGetQuoteContainers = styled.div`
    border: 1px solid #CCDDC7;

    @media (max-width: 1440px) {
        width: 40vw;
        height: 600px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (min-width: 501px) and (max-width: 1024px) {
        width: 40vw;
        height: 600px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    } 

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        height: 190px;
        justify-content: space-between;
        width: 85vw;
        align-items: center;
    }
`

const InfoCardCouroselContainer = styled.div`
    border: 1px solid #CCDDC7;

    @media (max-width: 1440px) {
        width: 56vw;
        height: 600px;
        overflow: hidden;
    }

    @media (min-width: 501px) and (max-width: 1024px) {
        width: 56vw;
        height: 600px;
        overflow: hidden;
    } 
    @media (max-width: 500px) {
        display: flex;
        overflow: hidden;
        height: 190px;
        width: 85vw;
        align-items: center;
    }
`

const ContainerDiv = styled.div`
    @media (max-width: 1440px) {
       display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-top: 65px;
    }

    @media (min-width: 501px) and (max-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-top: 65px;
    }

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 65px;
    }
`

const StyledParagraph = styled.p`
    color: #153E2A;

    @media (min-width: 501px) and (max-width: 1024px) {
        font-size: 24px;
        margin: 23px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        margin: 10px;
    }
`

const StyledButton = styled.button`
    border: 1px solid #30715D;
    border-radius: 24px;
    color: #30715D;
    background-color: #FBFAF6;
    height: 50px;
    font-size: 16px;
    width: -webkit-fill-available;
    transition: border-color 1s ease, color 1s ease;
    z-index: 2;
    position: relative;
    
    &:hover {
        border-color: #00B684;
        color: #00B684;
        cursor: pointer;
    }
`

const ImgContainerDiv = styled.div`
    height: 50px;
    width: 50px;
    flex: none;
    margin: 0px 8px;
    z-index: 1;
    position: relative;
    overflow: hidden;
`

const StyledFlipContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 10px 10px 10px;
    width: 300px;

    &:hover ${StyledButton} {
        border-color: #00B684;
        cursor: pointer;
        color: #00B684;
    }

    &:hover ${ImgContainerDiv} {
    cursor: pointer;
    }
`

export const CardAndQuote = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

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
        button.addEventListener('mouseleave', doFlip);

        return () => {
            button.removeEventListener('mouseenter', doFlip);
            button.removeEventListener('mouseleave', doFlip);
        };
    }, []);

    const handleHover = (isHovering: boolean) => {
        setTimeout(() => {
            if (imgRef.current) {
                imgRef.current.src = isHovering
                    ? '/ArrowRightHover.svg'
                    : '/ArrowRight.svg';
            }
        }, 400);
    };

    const handleClick = () => {
        console.log("This is working");

        if (imgRef.current) {
            gsap.timeline()

                .to(imgRef.current, {
                    x: 40,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                }, 0)

                .set(imgRef.current, {
                    x: -40,
                    opacity: 1
                }, 0.3)

                .to(imgRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                }, 0.3);
        }
    };

    return (
        <ContainerDiv>
            <InfoCardCouroselContainer><CardCarousel /></InfoCardCouroselContainer>
            <InfoCardCouroselAndGetQuoteContainers ref={containerRef}>
                <StyledParagraph>
                    Join hundreds of businesses who trust Arlo to offer health insurance that works the way it should:
                    affordable coverage that puts employees and their doctors in the driving seat.
                </StyledParagraph>
                <StyledFlipContainer
                    ref={buttonRef}
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}
                    onClick={handleClick}
                >
                    <ImgContainerDiv className='event'>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            ref={imgRef}
                            src={'/ArrowRight.svg'}
                            height={50}
                            width={50}
                            alt="animated arrow"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </ImgContainerDiv>
                    <StyledButton className='event'>Get a Custom Quote Today</StyledButton>
                </StyledFlipContainer>
            </InfoCardCouroselAndGetQuoteContainers>
        </ContainerDiv>
    )
}
