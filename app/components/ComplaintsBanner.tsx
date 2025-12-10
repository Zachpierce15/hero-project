'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styled from 'styled-components'
import Illo from './Illo.png'
import Image from 'next/image'

import './style.css'

const ImgContainerDiv = styled.div`
            height: auto;
            width: 16px;
            flex: none;
            margin: 0px 8px;
`

const ShrinkBoxContainer = styled.div`
            display: flex;
            align-items: center;
            margin: 0px 20px;
            justify-content: center;

            @media ((min-width: 501px) and (max-width: 1024px)) {
                margin: unset;
            }
`


const StyledSpan = styled.span`
            display: flex;
            flex: none;
            font-size: 12px;
            `

gsap.registerPlugin(useGSAP)

export const CompaintsBanner = () => {
    const shrinkBoxRef = useRef<HTMLDivElement>(null);
    const carouselRef1 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                desktop: "(min-width: 1440px)",
                tablet: "(min-width: 501px) and (max-width: 1024px)",
                mobile: "(max-width: 500px)",
            },
            (ctx) => {
                if (ctx?.conditions?.desktop) {
                    gsap.fromTo(
                        carouselRef1.current,
                        {
                            xPercent: 0
                        },
                        {
                            xPercent: -5,
                            duration: 2,
                            repeat: 0,
                            ease: 'none'
                        })
                    gsap.fromTo(
                        shrinkBoxRef.current,
                        {
                            scale: 1,
                        },
                        {
                            scale: 0,
                            delay: 1,
                            duration: 2.40,
                            ease: 'power4.in',
                            margin: 0,
                            x: '+=47'
                        })
                }
                if (ctx?.conditions?.tablet) {
                    gsap.fromTo(
                        carouselRef1.current,
                        {
                            xPercent: 0
                        },
                        {
                            xPercent: -5,
                            duration: 2,
                            repeat: 0,
                            ease: 'none'
                        })
                    gsap.fromTo(
                        shrinkBoxRef.current,
                        {
                            scale: 1,
                        },
                        {
                            scale: 0,
                            delay: 1,
                            duration: 2.40,
                            ease: 'power4.in',
                            margin: 0,
                            x: '+=47'
                        })
                }
                if (ctx?.conditions?.mobile) {
                    gsap.fromTo(
                        carouselRef1.current,
                        {
                            xPercent: 0
                        },
                        {
                            xPercent: -5,
                            duration: 2,
                            repeat: 0,
                            ease: 'none'
                        })
                    gsap.fromTo(
                        shrinkBoxRef.current,
                        {
                            scale: 1,
                        },
                        {
                            scale: 0,
                            delay: 1,
                            duration: 2.40,
                            ease: 'power4.in',
                            margin: 0,
                        })

                    gsap.fromTo('.inner-container-complaints', { scale: 1 }, {
                        scale: 1,
                        delay: 1,
                        duration: 2.3,
                        ease: 'power4.in',
                        margin: 0,
                        x: '+=200',
                        y: "+=60"
                    })
                }
            }
        );

        return () => mm.revert();

    },)
    return (
        <ShrinkBoxContainer
            ref={shrinkBoxRef}
        >
            <div className='outer_container'>
                <div
                    ref={carouselRef1}
                    className='inner-container-complaints'
                >
                    <StyledSpan>DENIALS</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={'/Illo.png'}
                            height={9}
                            width={16}
                            alt="Illo icon between text"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>LACK OF TRANSPARENCY</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={'/Illo.png'}
                            height={9}
                            width={16}
                            alt="Illo icon between text"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>IMPLEMENTATION HEADACHES</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={'/Illo.png'}
                            height={9}
                            width={16}
                            alt="Illo icon between text"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>UNPREDICATABLE RATE INCREASES</StyledSpan>
                </div>
            </div>
        </ShrinkBoxContainer>
    )
}