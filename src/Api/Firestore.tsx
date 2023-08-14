import { addDoc, collection , updateDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";

let docs = collection(firestore, 'docs')

export const createDoc = ({payload, title})=>{
    addDoc(docs, {...payload, userName: auth.currentUser?.displayName, title});
}

export const editDoc = ({payload, id})=>{
    let docToEdit = doc(docs, id)
    updateDoc(docToEdit, {...payload,}, id);
}

export const getDocuments = (setDocs)=>{
    getDocs(docs)
    .then((response)=>{
        setDocs(
            response.docs.map((doc)=>{
                return {...doc.data(), id: doc.id};
            })
        )
    })
}