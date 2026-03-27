import { useState } from 'react';
import { useDevice } from '../../../hooks/useDevice.js';

import HomeMobile from './HomeMobile.jsx';
import HomeDesktop from './HomeDesktop.jsx';

export default function HomePage() {
    const { isMobile } = useDevice();
    const [screen, setScreen] = useState('welcome');
    const commonProps = { screen, setScreen, isMobile };

    return isMobile
        ? <HomeMobile {...commonProps} />
        : <HomeDesktop {...commonProps} />;
}