import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ image, closeModal }) {
  return (
    <Modal onRequestClose={closeModal} contentLabel="Example Modal">
      <div>
        <h2>Modal Title</h2>
        <button onClick={closeModal}>close</button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}
