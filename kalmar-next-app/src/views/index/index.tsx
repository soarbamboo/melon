import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CLOUDS from 'vanta/dist/vanta.clouds.min.js';
import Typewriter from "@/src/components/Typewriter";

const Fps = styled.div`
  position: fixed;
  color: #2b2928;
  left: 10px;
  bottom: 50px;
`;
const Index = (props) => {
    const myRef = useRef(null);
    let indexFramse = 0;
    let lastTimestamp = performance.now();

    const [vantaEffect, setVantaEffect] = useState(null);
    const [fps, setFps] = useState(0);

    const calculateFPS = (timestamp) => {
        const elapsed = timestamp - lastTimestamp;
        if (elapsed >= 100) {
            const fps = (indexFramse * 100) / elapsed;
            setFps(fps);
            indexFramse = 0;
            lastTimestamp = timestamp;
        }
        indexFramse++;
        animate();
    };

    const setVanta = () => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    backgroundColor: 0xf02f2f,
                    skyColor: 0x390487,
                })
            );
        }
    };
    const animate = () => requestAnimationFrame(calculateFPS);

    useEffect(() => {
        // setVanta();
        // animate();
        return () => {
            if (vantaEffect) {
                setFps(0)
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    const getFpsDom = () => {
        if (fps > 0) {
            return <Fps>
                <span>{fps.toFixed(1)} fps</span>
            </Fps>
        }
    }
    return (
        <div ref={myRef} style={{ width: '100vw' }}>
            {getFpsDom()}
            <Typewriter text="愿你眼里有光,心中有爱,目光所及皆是美好"  />
        </div>
    );
};
export default Index;
