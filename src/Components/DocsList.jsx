import { useEffect, useState } from "react";
import docsIcon from "../assets/docs-icon.png";
import { getDocuments } from "../Api/Firestore";
import './DocsList.css'


export default function DocsList({ openDoc }) {
  const [docs, setDocs] = useState([
    {
      title: "",
      id: "",
      userName: "",
      value: "",
    },
  ]);
  const getDocs = async () => {
    await getDocuments(setDocs);
    docs.sort((doc)=>{
    })
  };
  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div className="docs-main  ">
      {docs.map((doc) => {
        return (
          <div
            onClick={() => openDoc(doc.id, doc.value, doc.title)}
            className="doc-card  "
          >
            <p
              className="doc-content"
              dangerouslySetInnerHTML={{
                __html: `${doc.value}`,
              }}
            ></p>

            <p className="doc-title	 ">
              {" "}
              <img className="doc-icon" src={docsIcon} />
              {doc.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}