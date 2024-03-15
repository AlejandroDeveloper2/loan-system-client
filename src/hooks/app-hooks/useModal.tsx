import { useState } from "react";

import { Modal } from "@components/index";
import { ModalWindowProps } from "@models/ComponentModels";

const useModal = (modalTitle: string) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  const ModalWindow = ({ children }: ModalWindowProps): JSX.Element => {
    return (
      <Modal
        modalTitle={modalTitle}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      >
        {children}
      </Modal>
    );
  };

  return {
    ModalWindow,
    toggleModal,
  };
};

export default useModal;
