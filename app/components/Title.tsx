'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import styled from 'styled-components'

import { CompaintsBanner } from './ComplaintsBanner'
import './style.css'

gsap.registerPlugin(useGSAP)

const StyledHeaderBeginning = styled.h1`
font-family: 'Sohne', sans-serif;
weight: bold;
spacing: -3%;
line-height: 120%;
font-size: 111px;
width: fit-content;

  @media (max-width: 500px) {
        font-size: 48px;
        margin-bottom: 8px;
        text-align: center;
        width: unset;
}
`

const StyledHeader = styled.h1`
font-family: 'Sohne', sans-serif;
weight: bold;
spacing: -3%;
line-height: 120%;
font-size: 111px;
width: fit-content;

@media (max-width: 500px) {
    font-size: 48px;
    text-align: center;
    width: unset;
}
`

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #153E2A;
    `

const StyledMiddleDiv = styled.div`
        
@media (max-width: 500px) {
    text-align: center;
}
`

type Props = {
    isMobile: boolean;
}

export const Title = ({ isMobile: _isMobile }: Props) => {

    const container = useRef(null)
    useGSAP(() => {

        const mm = gsap.matchMedia();

        mm.add(
            {
                desktop: "(min-width: 1440px)",
                tablet: "(min-width: 1025px) and (max-width: 1439px)",
                mobile: "(max-width: 500px)",
            },
            (ctx) => {

                if (ctx?.conditions?.desktop) {
                    const tl = gsap.timeline();
                    // 1440px+ animation (full shrink + slide)
                    tl.to('#left', { x: '+=360', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    ).to('#right', { x: '-=275', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    );

                    tl.to(["#left", "#right", '#other'],
                        {
                            color: '#00B684',
                            duration: .4
                        }
                    )
                }

                if (ctx?.conditions?.tablet) {
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

                if (ctx?.conditions?.mobile) {
                    // 375px and below (simple fade)
                    const tl = gsap.timeline();
                    tl.to('#beginning-of-title-header', { y: '+=50', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    ).to('#bottom', { y: '-=20', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    );
                    tl.to(["#left", "#bottom"],
                        {
                            color: '#00B684',
                            duration: .4,
                        }
                    )
                }
            }
        );

        return () => mm.revert();
    }, { scope: container, dependencies: [_isMobile] })

    return (
        <div>
            {_isMobile ? (
                <StyledHeaderContainer ref={container}>
                    <StyledHeaderBeginning id='beginning-of-title-header'>
                        <StyledMiddleDiv>
                            <span style={{ marginLeft: '5px' }}>Health insurance</span>
                        </StyledMiddleDiv>
                        <StyledMiddleDiv>
                            <span style={{ marginRight: '16px' }}>that</span>
                            <span style={{ fontStyle: "italic" }} id='left'>doesn&apos;t get</span>
                        </StyledMiddleDiv>
                    </StyledHeaderBeginning>
                    <div>
                        <CompaintsBanner />
                        <StyledHeader id='bottom'>in the way.</StyledHeader>
                    </div>

                </StyledHeaderContainer>
            ) : (
                <StyledHeaderContainer ref={container}>
                    <StyledHeaderBeginning id='beginning-of-title-header'>
                        <StyledMiddleDiv>
                            <span style={{ marginLeft: '5px' }}>Health insurance</span>
                        </StyledMiddleDiv>
                        <StyledMiddleDiv>
                            <span style={{ marginRight: '16px' }}>that</span>
                            <span style={{ fontStyle: "italic" }} id='left'>doesn&apos;t</span>
                        </StyledMiddleDiv>
                    </StyledHeaderBeginning>
                    <div>
                        <StyledHeader>get in</StyledHeader>
                        <CompaintsBanner />
                        <StyledHeader id='bottom'>the way.</StyledHeader>
                    </div>

                </StyledHeaderContainer>
            )}
        </div>
    )
}