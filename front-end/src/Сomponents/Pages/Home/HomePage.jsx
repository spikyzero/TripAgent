import {useDevice} from '../../../hooks/useDevice.js';

export default function HomePage() {
    const {isMobile} = useDevice();
    const commonProps = {isMobile};

    return (
        <div>Hello World!</div>
    )
}