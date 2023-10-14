import React from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min.js';
import Typewriter from "@/src/components/Typewriter";
import { ContentText, Fps, IndexContent, IndexBox, VantaContent } from './style';

class Index extends React.Component {
    static IS_INDEX = true;
    state = {
        fps: 0,
        vantaEffect: null
    }
    myRef: HTMLDivElement;
    indexFramse = 0;
    lastTimestamp = performance.now();

    componentDidMount() {
        this.setVanta();
        this.animate();
    }
    componentWillUnmount() {
        if (this.state.vantaEffect) {
            this.setState({ fps: 0 })
            this.state.vantaEffect.destroy();
        }
    }
    setVanta = () => {
        if (!this.state.vantaEffect) {
            const vantaEffect = CLOUDS({
                el: this.myRef,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                backgroundColor: 0xe6d9d9,
                sunColor: 0xe18a1d,
                speed: 1.40
            })
            this.setState({ vantaEffect })
        }
    };
    animate = () => requestAnimationFrame(this.calculateFPS);

    calculateFPS = (timestamp) => {
        const elapsed = timestamp - this.lastTimestamp;
        if (elapsed >= 100) {
            const fps = (this.indexFramse * 100) / elapsed;
            this.setState({ fps })
            this.indexFramse = 0;
            this.lastTimestamp = timestamp;
        }
        this.indexFramse++;
        this.animate();
    };
    getFpsDom = () => {
        if (this.state.fps > 0) {
            return <Fps>
                <span>{this.state.fps.toFixed(1)} fps</span>
            </Fps>
        }
    }
    render() {
        return (
            <IndexBox>
                <VantaContent ref={(c) => (this.myRef = c)} style={{ width: '100vw', height: '100vh' }}>
                    <script async src="/js/three.min.js" />
                </VantaContent >
                <IndexContent>
                    {this.getFpsDom()}
                    <ContentText>想都是问题，做才是答案，静下心往前走</ContentText>
                    <Typewriter />
                </IndexContent>
            </IndexBox>
        )
    }
}

export default Index;
