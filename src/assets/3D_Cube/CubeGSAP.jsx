import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CubeGSAP.css';

gsap.registerPlugin(ScrollTrigger);

const CubeGSAP = ({ clicked }) => {
    const cubeRef = useRef(null);

    useEffect(() => {
        /* Existing continuous rotation */
        gsap.to(cubeRef.current, {
            duration: 10,
            rotationX: 360,
            rotationY: 360,
            repeat: -1,
            ease: 'none'
        });

        /* New scroll-triggered effect: scale the cube on scroll */
        gsap.to(cubeRef.current, {
            scale: 1.1,
            scrollTrigger: {
                trigger: cubeRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });
    }, []);

    return (
        <div className="scene">
            <div className="cube" ref={cubeRef}>
                <div className="face" onClick={() => { clicked("#e74c3c") }} style={{ backgroundColor: "#e74c3c", transform: "translateZ(200px)" }}>Front</div>
                <div className="face cursor-pointer" onClick={() => { clicked("#3498db") }} style={{ backgroundColor: "#3498db", transform: "rotateY(180deg) translateZ(200px)" }}>Back</div>
                <div className="face cursor-pointer face-right" onClick={() => { clicked("#2ecc71") }} style={{ backgroundColor: "#2ecc71", transform: "rotateY(90deg) translateZ(200px)" }}>Right</div>
                <div className="face cursor-pointer face-left" onClick={() => { clicked("#f1c40f") }} style={{ backgroundColor: "#f1c40f", transform: "rotateY(-90deg) translateZ(200px)" }}>Left</div>
                <div className="face cursor-pointer face-top" onClick={() => { clicked("#9b59b6") }} style={{ backgroundColor: "#9b59b6", transform: "rotateX(90deg) translateZ(200px)" }}>Top</div>
                <div className="face cursor-pointer face-bottom" onClick={() => { clicked("#e67e22") }} style={{ backgroundColor: "#e67e22   ", transform: "rotateX(-90deg) translateZ(200px)" }}>Bottom</div>
            </div>
        </div>
    );
};

export default CubeGSAP;
