import React from "react";

import useCheckAuth from "../Hooks/useCheckAuth";
import ModalComponent from "../Components/Modal";
import { Button } from "antd";
import Topbar from "../Components/Topbar";
import Document from "../Components/Document";
import { func } from "prop-types";
import { loginWithGoogle } from "../Api/Auth";
import ButtonComponent from "../Components/Button";


export default function Docs () {


  const handleLogout = ()=>{
    logout();
    isAuthenticated=false;
  }

  let { isAuthenticated, userData, loading } = useCheckAuth();
  
  
  return (
    <>
      {!isAuthenticated ? (
        <div className="h-screen flex items-center justify-center flex-col ">
          <h1>Welcome to Google Docs! </h1>
          <ButtonComponent
            title="Login With Google"
          ></ButtonComponent>
        </div>
      ) : (
        <>
         <Topbar userPhotoURL={userData.photoURL}/>
        <Document userPhotoURL={userData.photoURL} />
          
        </>
      )}
    </>
  );
};

