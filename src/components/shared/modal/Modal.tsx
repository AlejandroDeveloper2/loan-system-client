import { Xmark } from "iconoir-react";

import { ModalProps } from "@models/ComponentModels";

import styles from "./Modal.module.css";

const Modal = (props: ModalProps): JSX.Element => {
  const { children, modalTitle, isModalVisible, toggleModal } = props;

  return (
    <div
      className={
        isModalVisible ? styles.overlayVisible : styles.overlayInvisible
      }
    >
      <dialog className={isModalVisible ? styles.visible : styles.invisible}>
        <header className={styles.modalHead}>
          <h2 className="heading2">{modalTitle}</h2>
          <Xmark onClick={toggleModal} />
        </header>
        <section className={styles.modalBody}>{children}</section>
      </dialog>
    </div>
  );
};

export default Modal;
