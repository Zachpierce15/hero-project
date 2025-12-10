'use client'
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import styled from "styled-components"

const StyledCarouselContainerInner = styled.div`
        display: flex;
        
        @media (max-width: 500px) {
        gap: 4rem;
    }
`

const StyledImgTag = styled.img`
        width: 198px;
        height: 98px;
`
const cards = [
    './ProfilePic1.svg',
    './ProfilePic2.svg',
    './ProfilePic3.svg',
    './ProfilePic4.svg',
]
export const CardCarousel = () => {
    const cardCarouselRef1 = useRef<HTMLDivElement>(null);
    const cardCarouselRef2 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            cardCarouselRef1.current,
            {
                xPercent: 0,
            },
            {
                xPercent: -100,
                duration: 10,
                repeat: -1,
                ease: "none",
            }
        );

        gsap.fromTo(
            cardCarouselRef2.current,
            {
                xPercent: 0,
            },
            {
                xPercent: -100,
                duration: 10,
                repeat: -1,
                ease: "none",
            }
        )
    })
    return (
        <div className="outer_container_cards" style={{ display: "flex" }}>
            <StyledCarouselContainerInner ref={cardCarouselRef1} className="inner_container_cards">
                {cards.map((item, idx) => {
                    return <StyledImgTag src={item} key={idx} />
                })}
            </StyledCarouselContainerInner>

            <StyledCarouselContainerInner ref={cardCarouselRef2} className="inner_container_cards">
                {cards.map((item, idx) => {
                    return <StyledImgTag src={item} key={idx} />
                })}
            </StyledCarouselContainerInner>
        </div>
    )
}