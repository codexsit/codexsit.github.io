import { Suspense, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './hailmary.css';
import PageTransition from '@/components/PageTransition';
import SpaceCanvas from './components/SpaceCanvas';
import HeroSection from './components/HeroSection';
import TransmissionSection from './components/TransmissionSection';
import RoleSection from './components/RoleSection';
import TimelineSection from './components/TimelineSection';
import UVTorchSection from './components/UVTorchSection';
import SteeringDialSection from './components/SteeringDialSection';
import DetailsSection from './components/DetailsSection';
import ShootingStars from './components/ShootingStars';
import LoadingScreen from './components/LoadingScreen';
import { AudioProvider } from './context/AudioContext';
import ScrollContext from './context/ScrollContext';
import useScrollProgress from './hooks/useScrollProgress';

function ScrollContent({ isMissionUnlocked, setIsMissionUnlocked }) {
    useEffect(() => {
        // Force browser to start at the top on reload, rather than remembering the scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="scroll-content">
            <HeroSection />
            <TransmissionSection />
            <RoleSection />
            <TimelineSection />
            <UVTorchSection />
            <SteeringDialSection setIsMissionUnlocked={setIsMissionUnlocked} />
            {isMissionUnlocked && <DetailsSection />}
        </div>
    );
}

ScrollContent.propTypes = {
    isMissionUnlocked: PropTypes.bool.isRequired,
    setIsMissionUnlocked: PropTypes.func.isRequired,
};

export default function TheHailMaryDirective() {
    const progress = useScrollProgress();
    const [isMissionUnlocked, setIsMissionUnlocked] = useState(false);
    const scrollContextValue = useMemo(() => ({ progress }), [progress]);

    return (
        <PageTransition overlayClassName="z-[1000]">
            <AudioProvider>
                <ScrollContext.Provider value={scrollContextValue}>
                    <main className="hailmary-page">
                        <LoadingScreen />
                        <ShootingStars />

                        <div className="canvas-container">
                            <Suspense fallback={null}>
                                <SpaceCanvas />
                            </Suspense>
                        </div>

                        <ScrollContent
                            isMissionUnlocked={isMissionUnlocked}
                            setIsMissionUnlocked={setIsMissionUnlocked}
                        />
                    </main>
                </ScrollContext.Provider>
            </AudioProvider>
        </PageTransition>
    );
}