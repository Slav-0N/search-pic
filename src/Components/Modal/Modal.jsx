import { useEffect } from "react";
import { Overlay, Modalll } from "./Modal.styled";

const Modal = ({ closeModal, bigImg }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      code === "Escape" && closeModal();
      console.log("clicked Esc");
    };
    window.addEventListener("keydown", closeByEsc);
    return () => window.removeEventListener("keydown", closeByEsc);
  }, [closeModal]);

  const shutDownModal = ({ target, currentTarget }) => {
    target === currentTarget && closeModal();
  };

  return (
    <Overlay className="overlay" onClick={(e) => shutDownModal(e)}>
      <Modalll className="modal">
        <img src={bigImg} alt="" />
      </Modalll>
    </Overlay>
  );
};
export default Modal;
