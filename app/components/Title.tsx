'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import styled from 'styled-components'

import { CompaintsBanner } from './ComplaintsBanner'
import './style.css'

gsap.registerPlugin(useGSAP)

const StyledHeaderBeginning = styled.h1`
display: flex;
font-family: 'Sohne', sans-serif;
weight: bold;
spacing: -3%;
line-height: 120%;
font-size: 111px;
width: 1418px;

@media ((min-width: 501px) and (max-width: 1024px)) {
        display: unset;
        text-align: center;
        width: unset;
}

  @media (max-width: 500px) {
  display: unset;
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

@media ((min-width: 1000px) and (max-width: 1024px)) {
    text-align: center;
    width: fit-content;
}

@media((min-width: 501px) and (max-width: 999px)) {
    width: unset;
    text-align: center;

}

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
    word-spacing: -3%
    `

const StyledAnimationContainer = styled.div`
        display: flex;
        flex-direction: row;

        @media ((min-width: 501px) and (max-width: 613px)) {
            flex-direction: column;
        }
    `

const StyledMiddleDiv = styled.div`
        
@media ((min-width: 501px) and (max-width: 1024px)) {
    text-align: center;
    width: 100vw
}

@media ((min-width: 501px) and (max-width: 613px)) {
display: flex;
flex-direction: column;
}
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
                tablet: "(min-width: 1000px) and (max-width: 1024px)",
                mobile: "(max-width: 999px)",
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
                    // 1025px - 1439px(smaller movement)
                    const tl = gsap.timeline();
                    tl.to('#left', { x: '+=185', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    ).to('#right', { x: '-=100', duration: 2.54, ease: 'power4.in', delay: 1 },
                        0
                    );

                    tl.to(["#left", "#right", '#other'],
                        {
                            color: '#00B684',
                            duration: .4
                        }
                    )
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
            {/** The isMobile check is here because the html structure changes between mobile and tablet/desktop **/}
            {_isMobile ? (
                <StyledHeaderContainer ref={container}>
                    <StyledHeaderBeginning id='beginning-of-title-header'>
                        <StyledMiddleDiv>
                            <span style={{ marginLeft: '5px' }}>Health insurance</span>
                        </StyledMiddleDiv>
                        <StyledMiddleDiv>
                            <span style={{ marginRight: '16px' }}>that</span>
                            <span id='left'>doesn&apos;t get</span>
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
                            <span style={{ marginRight: '20px', marginLeft: '20px' }}>that</span>
                            <span id='other'>doesn&apos;t</span>
                        </StyledMiddleDiv>
                    </StyledHeaderBeginning>
                    <StyledAnimationContainer>
                        <StyledHeader id='left'>get in</StyledHeader>
                        <CompaintsBanner />
                        <StyledHeader id='right'>the way.</StyledHeader>
                    </StyledAnimationContainer>

                </StyledHeaderContainer>
            )}
        </div>
    )
}