import { useState } from 'react';

import Modal from "../Components/Modal";
import Button from '../Components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            
            { showModal && <Modal /> }
        </div>
    )
}
export default ModalPage;