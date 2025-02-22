import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cube from '../3D_Cube/CubeGSAP';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const titleRef = useRef(null);
    const titleRef2 = useRef(null);
    const homeText = useRef(null);

    useEffect(() => {
        gsap.to(homeText.current, {
            opacity: 1,
            duration: 1.5,
            y: 50
        })
        gsap.fromTo(
            titleRef2.current,
            {
                width: "100%",
                y: -40,
            },
            {
                width: "90%",
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 0.5,
                }
            }
        );

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    const [color, setColor] = useState('black');
    const handlefun = (Col) => {
        alert('Color Changed');
        setColor(Col);
    };

    return (
        <>
            <div className="text-white scroll-snap-start w-full " ref={titleRef2} style={{ margin: 'auto', backgroundColor: color }}>
                <h1 className="text-[1050%] w-full text-center font-bold mt-20 text-gray-400 opacity-0" ref={homeText}>
                    Design * Chube
                </h1>
                <div className="flex justify-between mt-12 px-4" ref={titleRef}>
                    <p className="w-3/12 text-gray-300  text-xl">
                        At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing.
                        Elevate your brand and transform your digital presence with our innovative design solutions.
                    </p>
                    <div>
                        <Cube clicked={handlefun} />
                    </div>
                    <p className="w-3/12 text-gray-300 text-xl text-end">
                        *Hasnain Khushi — 2025 <br />
                        Web Developer at Emodian Tech
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
