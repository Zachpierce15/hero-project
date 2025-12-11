'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import styled from "styled-components"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const StyledContainerOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
`

const StyledInnerContainer = styled.div`
    display: flex;
    gap: 15px;
    padding: 15px;
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

export default function GsapSlider() {
    const carouselRef1 = useRef<HTMLDivElement>(null)
    const carouselRef2 = useRef<HTMLDivElement>(null)
    const ITEM_SIZE = 213 // 198 width + 15 gap

    useGSAP(() => {
        if (!carouselRef1.current || !carouselRef2.current) return

        const containerWidth = carouselRef1.current.parentElement!.offsetWidth

        const tl = gsap.timeline({ repeat: -1 })

        cards.forEach((_, index) => {
            // Calculate position to center the image
            const targetX = -(index * ITEM_SIZE) + (containerWidth / 2) - 99

            // Animate both carousels together
            tl.to([carouselRef1.current, carouselRef2.current], {
                x: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            }, index === 0 ? 0 : '>')

            // Get the center images
            const slide1 = carouselRef1.current?.querySelectorAll('img')[index] as HTMLElement
            const slide2 = carouselRef2.current?.querySelectorAll('img')[index] as HTMLElement

            // Scale up the center image
            tl.to([slide1, slide2], {
                scale: 1.2,
                duration: 0.5,
                ease: 'back.out'
            }, '>')

            // Scale down the center image
            tl.to([slide1, slide2], {
                scale: 1,
                duration: 0.5,
                ease: 'back.inOut'
            })

            // Pause after scaling
            tl.to({}, { duration: 1.5 })
        })

        // Reset position for seamless loop
        tl.set([carouselRef1.current, carouselRef2.current], { x: 0 })
    })

    return (
        <StyledContainerOuter>
            <StyledInnerContainer ref={carouselRef1}>
                {cards.map((item, idx) => (
                    <StyledImgTag src={item} key={`carousel1-${idx}`} />
                ))}
            </StyledInnerContainer>

            <StyledInnerContainer ref={carouselRef2} aria-hidden="true">
                {cards.map((item, idx) => (
                    <StyledImgTag src={item} key={`carousel2-${idx}`} />
                ))}
            </StyledInnerContainer>
        </StyledContainerOuter>
    )
}