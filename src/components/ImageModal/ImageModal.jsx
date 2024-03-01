import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      portalClassName={css.portal}
      overlayClassName={css.overlay}
      className={css.modal}
    >
      <div>
        <h2>Modal Title</h2>
        <button onClick={closeModal}>close</button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}
