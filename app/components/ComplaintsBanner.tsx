'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styled from 'styled-components'
import Illo from './Illo.png'
import Image from 'next/image'

import './style.css'

export const ImgContainerDiv = styled.div`
height: 9px;
width: 16px;
flex: none;
margin: 0px 8px;
`

export const StyledSpan = styled.span`
display: flex;
flex: none;`

gsap.registerPlugin(useGSAP)

export const CompaintsBanner = () => {
    const shrinkBoxRef = useRef<HTMLDivElement>(null);
    const carouselRef1 = useRef<HTMLDivElement>(null);

    useGSAP(() => {

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1440px)",
        tablet: "(min-width: 1025px) and (max-width: 1439px)",
        mobile: "(max-width: 375px)",
      },
      (ctx) => {
        // Use ctx.mq instead of ctx.conditions
        if (ctx.desktop) {
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
        if (ctx.tablet) {
          // tablet animation
        }
        if (ctx.mobile) {
          // mobile animation
        }
      }
    );

    return () => mm.revert();

    }, {scope: shrinkBoxRef})
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '0px 40px'
        }} ref={shrinkBoxRef}>
            <div className='outer_container'>
                <div
                 ref={carouselRef1}
                 className='inner-container-complaints'
                 >
                    <StyledSpan>DENIALS</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={Illo}
                            height={9}
                            width={16}
                            alt="Picture of the author"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>LACK OF TRANSPARENCY</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={Illo}
                            height={9}
                            width={16}
                            alt="Picture of the author"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>IMPLEMENTATION HEADACHES</StyledSpan>
                    <ImgContainerDiv>
                        <Image
                            src={Illo}
                            height={9}
                            width={16}
                            alt="Picture of the author"
                        />
                    </ImgContainerDiv>
                    <StyledSpan>UNPREDICATABLE RATE INCREASES</StyledSpan>
                </div>
            </div>
        </div>
            )
}