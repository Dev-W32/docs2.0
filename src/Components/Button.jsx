import React from "react";
import { Button } from "antd";
import { loginWithGoogle } from "../Api/Auth";

const handleLogin = () => {
  loginWithGoogle();
};

const ButtonComponent = ({
  title,
  
}) => {
  return (
    <>
      <Button size="large" type="primary" onClick={handleLogin} >
        {title}
      </Button>
    </>
  );
};

export default ButtonComponent;