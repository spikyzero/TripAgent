import { useState } from 'react';
import { useDevice } from '../../../hooks/useDevice.js';

import LoginMobile from './LoginMobile.jsx';
import LoginDesktop from './LoginDesktop.jsx';

export default function LoginPage() {
    const { isMobile } = useDevice();
    const [screen, setScreen] = useState('welcome');
    const commonProps = { screen, setScreen, isMobile };

    return isMobile
        ? <LoginMobile {...commonProps} />
        : <LoginDesktop {...commonProps} />;
}