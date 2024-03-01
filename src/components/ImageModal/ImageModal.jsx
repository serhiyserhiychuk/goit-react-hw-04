import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { MdOutlineClose } from "react-icons/md";

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
      <div className={css.container}>
        <h2 className={css.title}>{image.alt_description}</h2>
        <button className={css.button} onClick={closeModal}>
          <MdOutlineClose size={32} />
        </button>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
}
