import React from "react";
import { Modal } from "antd";



const CommonModal= ({
  isModalOpen,
  setIsModalOpen,
  createDocument,
  children,
}) => {
  const handleOk = () => {
    createDocument();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Add a Document"
        open={isModalOpen}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default CommonModal;