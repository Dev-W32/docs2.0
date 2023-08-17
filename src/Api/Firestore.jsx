import { firestore, auth } from "../firebaseConfig";

import {
  addDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

let docs = collection(firestore, "docs");


export const createDoc = (payload) => {
  addDoc(docs, {
    ...payload,
    userId: auth.currentUser?.uid,
    userName: auth.currentUser?.displayName,
  });
};

export const getDocuments = (setDocs) => {
  let docQuery = query(docs, where("userId", "==", auth.currentUser?.uid));
  onSnapshot(docQuery, (response) => {
    setDocs(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};

export const editDoc = (payload, id) => {
  let docToEdit = doc(docs, id);
  updateDoc(docToEdit, payload, id);
};

export const getCurrentDoc = async (
  id,
  setValue ,
  setTitle 
) => {
  let docToGet = doc(docs, id);
  await onSnapshot(docToGet, (response) => {
    setValue(response.data()?.value);
    setTitle(response.data()?.title);
  });
};