import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { logout } from '../Api/Auth';
const items = [
    {
        key:'0',
        danger:true,
        label: 'Logout',
        onClick:logout
    },
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown;