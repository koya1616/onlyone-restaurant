'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Flex, FloatButton, Drawer, message, Input, Tooltip, Card, Result, Popover } from 'antd';
import { FileSearchOutlined, HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import requestRestaurant from '../../../request/requestRestaurant.post';

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
            <ThisIsNotAVariable />
          </div>
        </Flex>
      </Card>
      <Card style={{ borderRadius: "30px", margin: "0 10px" }} styles={{ body: { padding: 0, overflow: 'hidden' } }} className="min-[755px]:hidden">
        <div style={{ padding: "clamp(0.625rem, -1.023rem + 8.791vw, 3.125rem)", maxWidth: "350px", height: "clamp(21.875rem, 15.694rem + 32.967vw, 31.25rem)" }}>
          <ThisIsNotAVariable />
        </div>
      </Card>
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 24, top: 24 }} onClick={() => setOpen(true)} />
      <Drawer
        title="お店の登録申請について"
        placement="left"
        width="clamp(15.625rem, 8.224rem + 39.474vw, 43.75rem)"
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>日本に一つだけのお店を申請してください！</p>
      </Drawer>
    </div>
  );
}

export default ILoveYou;

type FieldType = {
  name: string;
  information: string;
};

const ThisIsNotAVariable = () => {
  const router = useRouter()

  const [request, setRequest] = useState<FieldType>({
    name: "",
    information: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    if (!request.name) {
      warnMessage('店名を入力してください。');
      return;
    }
    if (!request.information) {
      warnMessage('URLを入力してください。');
      return;
    }
    setLoading(true);
    await requestRestaurant(request)
      .then(() => {
        setShowSuccess(true);
      })
      .catch((e) => {
        setLoading(false);
        if (e.message === 'E400') {
          warnMessage('不正なリクエストです。再度お試しください。');
        }
        if (e.message === 'E500') {
          router.push("/sorry");
        }
      })
  }

  const warnMessage = (message: string) => {
    messageApi.open({
      type: 'warning',
      content: message,
    });
  }

  return (
    <>
    {contextHolder}
    {showSuccess ? (
      <Result
        status="success"
        title="お店の投稿が完了しました！"
        subTitle="お店の投稿ありがとうございます！承認されるまでお待ちください！"
        style={{ padding: "clamp(0.625rem, 0.461rem + 0.877vw, 1.25rem) 0" }}
        extra={[
          <Flex key="button" vertical align='center' gap="middle">
            <Button className='w-40' href='/'>
              TOPページへ
            </Button>
            <Button onClick={() => window.location.reload()} className='w-40'>
              続けて登録
            </Button>
          </Flex>,
        ]}
      />
    ):(
      <>
      <Tooltip trigger={['focus']} title="日本に1つだけのお店名を入力" placement="top">
        <Input
          placeholder="店名"
          prefix={<HomeOutlined />}
          size="large"
          className="my-10"
          allowClear
          onChange={(e) => setRequest({ ...request, name: e.target.value })}
        />
      </Tooltip>
      <Tooltip trigger={['focus']} title="お店の情報がわかるURL" placement="top">
        <Input
          placeholder="https://example.com"
          prefix={<FileSearchOutlined />}
          size="large"
          className="mb-10"
          allowClear
          onChange={(e) => setRequest({ ...request, information: e.target.value })}
        />
      </Tooltip>
      <Popover title={!request.name || !request.information ? "店名と情報を入力してください。" : ""}>
        <Button type="primary" size="large" block shape="round" className="mt-10" onClick={() => handleRequest()} disabled={!request.name || !request.information} loading={loading}>
          投稿
        </Button>
      </Popover>
      </>
    )}
    </>
  )
}