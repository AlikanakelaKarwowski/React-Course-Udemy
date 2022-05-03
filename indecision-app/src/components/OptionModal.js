import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
    </Modal>
)

export default OptionModal
