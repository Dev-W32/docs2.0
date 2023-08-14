import React, { useState } from 'react';
import { Button } from 'antd';

const ModalComponent: React.FC = ({children,title, handleLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  

  return (
    <>
      <Button className=''  size='large' type="primary" onClick={handleLogin}>
       {title}
      </Button>

    </>
  );
};

export default ModalComponent;