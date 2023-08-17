import React, { useState } from "react";
import { Modal } from "antd";
import EditDoc from "./EditDoc";



const CommonModal= ({
  isModalOpen,
  setIsModalOpen,
  createDocument,
  children,
}) => {
  const handleOk = () => {
    createDocument();
    setIsModalOpen(false);
    setIsOkClicked(true);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isOkClicked, setIsOkClicked] = useState(false);

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


export default CommonModal