'use client';

import React, { useState } from 'react';
import { Button, Flex, FloatButton, Drawer, Input, Tooltip, Card } from 'antd';
import { FileSearchOutlined, HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const cardStyle: React.CSSProperties = {
  width: "80%",
  borderRadius: "30px",
};

const ILoveYou = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-orange-200 h-screen justify-center items-center flex'>
      <Card style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }} className="max-[755px]:hidden">
        <Flex style={{ height: "500px" }}>
          <div style={{ width: "500px", borderRadius: "30px", }} className='bg-request-form1'></div>
          <div style={{flex: 1, padding: "clamp(1.25rem, -4.261rem + 11.679vw, 6.25rem)", minWidth: "300px" }}>
            <Tooltip trigger={['focus']} title="日本に1つだけのお店名を入力" placement="top">
              <Input
                placeholder="店名"
                prefix={<HomeOutlined />}
                size="large"
                className="my-10"
              />
            </Tooltip>
            <Tooltip trigger={['focus']} title="お店の情報がわかるURL" placement="top">
              <Input
                placeholder="https://example.com"
                prefix={<FileSearchOutlined />}
                size="large"
                className="mb-10"
              />
            </Tooltip>
            <Button type="primary" size="large" block shape="round" className="mt-10">
              投稿
            </Button>
          </div>
        </Flex>
      </Card>
      <Card style={{ borderRadius: "30px", margin: "0 10px" }} styles={{ body: { padding: 0, overflow: 'hidden' } }} className="min-[755px]:hidden">
        <div style={{ padding: "clamp(0.625rem, -1.023rem + 8.791vw, 3.125rem)", maxWidth: "350px", height: "clamp(21.875rem, 15.694rem + 32.967vw, 31.25rem)" }}>
          <Tooltip trigger={['focus']} title="日本に1つだけのお店名を入力" placement="top">
            <Input
              placeholder="店名"
              prefix={<HomeOutlined />}
              size="large"
              className="my-10"
            />
          </Tooltip>
          <Tooltip trigger={['focus']} title="お店の情報がわかるURL" placement="top">
            <Input
              placeholder="https://example.com"
              prefix={<FileSearchOutlined />}
              size="large"
              className="mb-10"
            />
          </Tooltip>
          <Button type="primary" size="large" block shape="round" className="mt-10">
            投稿
          </Button>
        </div>
      </Card>
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 24, top: 24 }} onClick={() => setOpen(true)} />
      <Drawer
        title="Drawer with extra actions"
        placement="left"
        width="clamp(15.625rem, 8.224rem + 39.474vw, 43.75rem)"
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default ILoveYou;