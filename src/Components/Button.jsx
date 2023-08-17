import React from "react";
import { Button } from "antd";



const ButtonComponent = ({
  title,
  handleLogin,
}) => {
  return (
    <>
      <Button size="large" type="primary" onClick={handleLogin}>
        {title}
      </Button>
    </>
  );
};

export default ButtonComponent;