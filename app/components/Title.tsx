'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styled from 'styled-components'

import {CompaintsBanner} from './ComplaintsBanner'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

const StyledHeaderBeginning = styled.h1`
font-family: 'Sohne', sans-serif;
weight: bold;
spacing: -3%;
line-height: 120%;
font-size: 111px;
width: fit-content;

  @media (max-width: 375px) {
        font-size: 48px;
}
`

const StyledHeader = styled.h1`
font-family: 'Sohne', sans-serif;
weight: bold;
spacing: -3%;
line-height: 120%;
font-size: 111px;
width: fit-content;

@media (max-width: 375px) {
    font-size: 48px;
}
`

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #153E2A;
    `

const StyledMiddleDiv = styled.div`
        

@media (max-width: 375px) {
    text-align: center;
}
    `

export const Title = () => {
        const container = useRef(null)
        useGSAP(() => {

            const mm = gsap.matchMedia();

            mm.add(
            {
                desktop: "(min-width: 1440px)",
                tablet: "(min-width: 1025px) and (max-width: 1439px)",
                mobile: "(max-width: 375px)",
            },
            (ctx) => {

                if (ctx.desktop) {
                    const tl = gsap.timeline();
                // 1440px+ animation (full shrink + slide)
                    tl.to('#left', {x: '+=360', duration: 2.54, ease:'power4.in', delay: 1},
                        0
                        ).to('#right', {x: '-=275', duration: 2.54, ease: 'power4.in', delay: 1},
                            0
                        );

                        tl.to(["#left", "#right", '#other'], 
                            {
                                color: '#00B684',
                                duration: .4
                            }
                        )
                }

                if (ctx.tablet) {
                // 1025px - 1439px (smaller movement)
                const tl = gsap.timeline();
                tl.fromTo(
                    ".middle",
                    { scale: 2, opacity: 1 },
                    { scale: 0, opacity: 0, duration: 0.8, ease: "power1.inOut" }
                )
                    .to(".left", { x: "+=40", duration: 0.8 }, 0)
                    .to(".right", { x: "-=40", duration: 0.8 }, 0);
                }

                if (ctx.mobile) {
                // 375px and below (simple fade)
                // gsap.fromTo(
                //     ".middle",
                //     { opacity: 0, y: 20 },
                //     { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                // );
                }
            }
            );

        return () => mm.revert();
    }, {scope: container})
    return (
    <StyledHeaderContainer ref={container}>
        <StyledHeaderBeginning>
            <span>Health insurance</span> 
            <StyledMiddleDiv>
                <span style={{marginRight: '16px'}}>that</span> 
                <span id='other'>doesn't </span>
                <span id='left'>get</span>
            </StyledMiddleDiv> 
        </StyledHeaderBeginning>
        <div
            // style={{display: 'flex'}}
            >
            <StyledHeader id="left">in</StyledHeader>
            <CompaintsBanner />
            <StyledHeader id='right'>the way.</StyledHeader>
            </div>
            
    </StyledHeaderContainer>)
}