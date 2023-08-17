import React from "react";
import { loginWithGoogle, logout } from "../API/Auth";
import useCheckAuth from "../Hooks/useCheckAuth";
import ModalComponent from "../Components/Modal";
import { Button } from "antd";
import Topbar from "../Components/Topbar";
import Document from "../Components/Document";
import { func } from "prop-types";

export default function Docs () {
  const handleLogin = () => {
    loginWithGoogle();
  };

  const handleLogout = ()=>{
    logout();
  }

  let { isAuthenticated, userData, loading } = useCheckAuth();
  
  
  return (
    <>
      {!isAuthenticated ? (
        <div className="flex justify-center items-center">
          <ModalComponent
            title="Login With Google"
            handleLogin={handleLogin}
          ></ModalComponent>
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

