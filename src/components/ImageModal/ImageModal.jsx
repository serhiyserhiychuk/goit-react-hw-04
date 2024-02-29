import Modal from "react-modal";
import { useState } from "react";

export default function ImageModal() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>Modal Title</h2>
      <button onClick={closeModal}>close</button>
      <img src="" alt="image" />
    </Modal>
  );
}
