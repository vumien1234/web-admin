import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';

const Loading = () => (
    <div className='loading-overlay'>
        <Space>
            <Spin className='text-[#fff]' indicator={<LoadingOutlined spin />} size="large" />
        </Space>
    </div>
);

export default Loading;
