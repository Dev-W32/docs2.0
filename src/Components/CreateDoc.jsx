import { useState } from "react";
import addDoc from "../assets/docs-blank-googlecolors.png";
import EditDoc from "./EditDoc";

import ModalComponent from "./Modal";
import { Input, Modal } from "antd";
import { createDoc } from "../Api/Firestore";



export default function CreateDoc({ isEdit, handleEdit, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const createDocument = () => {
    let payload = {
      title: title,
      value: "",
    };
    createDoc(payload);
  };

  if (isEdit) return <EditDoc handleEdit={handleEdit} id={id} />;
  return (
    <div className="new-doc-container bg-containercolor flex justify-center">
            <div className="new-doc-inner w-9/12 ">

        <p>Start a new document</p>
        <img
          className="start-doc w-40 cursor-pointer border-solid border-bordercolor rounded-sm hover:border-hoverborder "
          src={addDoc}
          onClick={() => {
            // handleEdit();
            setTitle("");
            setIsModalOpen(true);
            
          }}
        />
        <p className="title">Blank</p>
      </div>

      <ModalComponent
        createDocument={createDocument}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <Input
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
          placeholder="Enter the Title"
        />
      </ModalComponent>
    </div>
  );
}