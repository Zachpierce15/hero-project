'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const images = [
    "./ProfilePic1.svg",
    "./ProfilePic2.svg",
    "./ProfilePic3.svg",
    "./ProfilePic4.svg",
    "./ProfilePic1.svg",
    "./ProfilePic2.svg",
    "./ProfilePic3.svg",
    "./ProfilePic4.svg",
];

export const CardCarousel = () => {
    const carouselRef1New = useRef<HTMLDivElement>(null);
    const carouselRef2New = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                fullScreen: "(max-width: 1440px)",
                desktop: "(min-width: 1023px) and (max-width: 1440px)",
                tablet: "(min-width: 501px) and (max-width: 1024px)",
                mobile: "(max-width: 500px)",
            },
            (ctx) => {
                if (ctx?.conditions?.desktop) {
                    const track1 = carouselRef1New.current;
                    const track2 = carouselRef2New.current;
                    if (!track1 || !track2) return;

                    const slides1 = gsap.utils.toArray<HTMLElement>(
                        track1.querySelectorAll(".carousel_image_new")
                    );
                    const slides2 = gsap.utils.toArray<HTMLElement>(
                        track2.querySelectorAll(".carousel_image_new")
                    );

                    if (!slides1.length || !slides2.length) return;

                    // Reset to starting position
                    gsap.set([track1, track2], { x: 0 });

                    const tl = gsap.timeline({
                        repeat: -1,
                        defaults: { ease: "none" },
                    });

                    const outer = track1.parentElement as HTMLElement;
                    const outerWidth = outer.getBoundingClientRect().width;
                    const slideWidth = slides1[0]?.getBoundingClientRect().width || 0;
                    const gap = 64; // 2rem from CSS

                    // Cache positions relative to track origin (not offsetLeft)
                    const positions: number[] = slides1.map((_, i) => {
                        return i * (slideWidth + gap);
                    });

                    for (let index = 1; index < slides1.length; index++) {
                        const img1 = slides1[index];
                        const img2 = slides2[index];
                        const slidePosition = positions[index];
                        const slideCenter = slidePosition + slideWidth / 2;
                        const targetX = outerWidth / 2 - slideCenter;

                        tl.to([track1, track2], {
                            x: targetX,
                            duration: 1.5,
                            ease: "power2.inOut",
                        });

                        tl.to({}, { duration: 0.4 });

                        tl.to([img1, img2], {
                            scale: 1.2,
                            duration: 2,
                            ease: "power2.out",
                        });

                        tl.to([img1, img2], {
                            scale: 1,
                            duration: 2,
                            ease: "power2.in",
                        });

                        tl.to({}, { duration: 0.6 });
                    }
                }

                if (ctx?.conditions?.tablet) {
                    const track1 = carouselRef1New.current;
                    const track2 = carouselRef2New.current;
                    if (!track1 || !track2) return;

                    const slides1 = gsap.utils.toArray<HTMLElement>(
                        track1.querySelectorAll(".carousel_image_new")
                    );
                    const slides2 = gsap.utils.toArray<HTMLElement>(
                        track2.querySelectorAll(".carousel_image_new")
                    );

                    if (!slides1.length || !slides2.length) return;

                    gsap.set([track1, track2], { y: 0 });

                    const tl = gsap.timeline({
                        repeat: -1,
                        defaults: { ease: "none" },
                    });

                    const outer = track1.parentElement as HTMLElement;
                    const outerHeight = outer.getBoundingClientRect().height;
                    const slideHeight =
                        slides1[0]?.getBoundingClientRect().height || 0;
                    const gap = 32; // 2rem from CSS

                    const positions: number[] = slides1.map((_, i) => {
                        return i * (slideHeight + gap);
                    });

                    for (let index = 1; index < slides1.length; index++) {
                        const img1 = slides1[index];
                        const img2 = slides2[index];
                        const slidePosition = positions[index];
                        const slideCenter = slidePosition + slideHeight / 2;
                        const targetY = outerHeight / 2 - slideCenter;

                        tl.to([track1, track2], {
                            y: targetY,
                            duration: 1.5,
                            ease: "power2.inOut",
                        });

                        tl.to({}, { duration: 0.4 });

                        tl.to([img1, img2], {
                            scale: 1.24,
                            duration: 2,
                            ease: "power2.out",
                        });

                        tl.to([img1, img2], {
                            scale: 1,
                            duration: 2,
                            ease: "power2.in",
                        });

                        tl.to({}, { duration: 0.6 });
                    }
                }

                if (ctx?.conditions?.mobile) {
                    const track1 = carouselRef1New.current;
                    const track2 = carouselRef2New.current;
                    if (!track1 || !track2) return;

                    const slides1 = gsap.utils.toArray<HTMLElement>(
                        track1.querySelectorAll(".carousel_image_new")
                    );
                    const slides2 = gsap.utils.toArray<HTMLElement>(
                        track2.querySelectorAll(".carousel_image_new")
                    );

                    if (!slides1.length || !slides2.length) return;

                    const tl = gsap.timeline({
                        repeat: -1,
                        defaults: { ease: "none" },
                    });

                    const outer = track1.parentElement as HTMLElement;
                    const outerWidth = outer.getBoundingClientRect().width;

                    for (let index = 1; index < slides1.length; index++) {
                        const img1 = slides1[index];
                        const img2 = slides2[index];

                        const slideLeft = img1.offsetLeft;
                        const slideWidth = img1.getBoundingClientRect().width;
                        const slideCenter = slideLeft + slideWidth / 2;

                        const targetX = outerWidth / 2 - slideCenter;

                        tl.to([track1, track2], {
                            x: targetX,
                            duration: 1.5,
                            ease: "power2.inOut",
                        });

                        tl.to({}, { duration: 0.4 });

                        tl.to([img1, img2], {
                            scale: 1.24,
                            duration: 2,
                            ease: "power2.out",
                        });

                        tl.to([img1, img2], {
                            scale: 1,
                            duration: 2,
                            ease: "power2.in",
                        });

                        tl.to({}, { duration: 0.6 });
                    }
                }
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <div className="outer_container_new">
            <div ref={carouselRef1New} className="inner_container_new">
                {images.map((image, index) => {
                    return (
                        <img
                            src={image}
                            key={index}
                            className="carousel_image_new"
                        />
                    );
                })}
            </div>
            <div
                ref={carouselRef2New}
                className="inner_container_new"
                aria-hidden
            >
                {images.map((image, index) => {
                    return (
                        <img
                            src={image}
                            key={index}
                            className="carousel_image_new"
                        />
                    );
                })}
            </div>
        </div>
    );
};