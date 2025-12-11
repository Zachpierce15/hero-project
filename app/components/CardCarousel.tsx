'use client'
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import styled from "styled-components"


const StyledCarouselContainerOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
`


const StyledCarouselContainerInner = styled.div`
    display: flex;
    gap: 0;
    
    @media (max-width: 500px) {
        gap: 2rem;
        padding-right: 10px;
    }
`


const StyledImgTag = styled.img`
    width: 198px;
    height: 98px;
    flex-shrink: 0;
`


const cards = [
    './ProfilePic1.svg',
    './ProfilePic2.svg',
    './ProfilePic3.svg',
    './ProfilePic4.svg',
]


gsap.registerPlugin(useGSAP);


export const CardCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const SLIDE_WIDTH = 198;
    const START_INDEX = 1;
    const PAUSE_DURATION = 3;
    const SCALE_DURATION = 2;


    useGSAP(() => {
        if (!carouselRef.current) return;


        const slides = carouselRef.current.querySelectorAll('img') as NodeListOf<HTMLElement>;
        if (slides.length === 0) return;

        const containerWidth = carouselRef.current.parentElement!.offsetWidth;

        // Set initial position to second image centered
        const initialTargetX = -(START_INDEX * SLIDE_WIDTH) + (containerWidth / 2) - (SLIDE_WIDTH / 2);
        gsap.set(carouselRef.current, { x: initialTargetX });
        gsap.set(slides, { scale: 1 });


        const tl = gsap.timeline({ repeat: -1 });


        slides.forEach((slide, index) => {
            // Calculate position to center the slide in the container
            const targetX = -(index * SLIDE_WIDTH) + (containerWidth / 2) - (SLIDE_WIDTH / 2);


            // Move to slide
            tl.to(carouselRef.current, { x: targetX, duration: 0.8, ease: 'power2.inOut' }, index === 0 ? 0 : '>');


            // Scale center image (happens during pause)
            tl.to(slide, { scale: 1.2, duration: 0.5, ease: 'back.out' }, '>');
            tl.to(slide, { scale: 1, duration: 0.5, ease: 'back.inOut' });


            // Pause (remaining time after scale animation)
            tl.to({}, { duration: 1 });
        });


        // Continue to first image and loop seamlessly
        const firstSlide = slides[0];
        const firstTargetX = -(0 * SLIDE_WIDTH) + (containerWidth / 2) - (SLIDE_WIDTH / 2);
        tl.to(carouselRef.current, { x: firstTargetX, duration: 0.8, ease: 'power2.inOut' }, '>');
        tl.to(firstSlide, { scale: 1.2, duration: 0.5, ease: 'back.out' }, '>');
        tl.to(firstSlide, { scale: 1, duration: 0.5, ease: 'back.inOut' });
        tl.to({}, { duration: 1 });
    })


    return (
        <StyledCarouselContainerOuter>
            <StyledCarouselContainerInner ref={carouselRef}>
                {cards.map((item, idx) => (
                    <StyledImgTag src={item} key={idx} />
                ))}
            </StyledCarouselContainerInner>
        </StyledCarouselContainerOuter>
    )
}