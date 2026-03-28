import {useDevice} from '../../../hooks/useDevice.js';

export default function AccountPage() {
    const {isMobile} = useDevice();
    const commonProps = {isMobile};

    return (
        <div>Hello World!</div>
    )
}