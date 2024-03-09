'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Image } from 'antd';
import { Button, Card, Form, message, type FormProps, Input, Spin } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import adminLogin from '../../../request/adminLogin.post';

type FieldType = {
  whoareyou?: string;
  password?: string;
};

const AdminLogin = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      await adminLogin(values);
      router.push("/admin");
    } catch (e: any) {
      if (e.message === 'E401') {
        messageApi.open({
          type: 'error',
          content: 'なんか間違ってるで〜',
        });
        setLoading(false);
      }
      if (e.message === 'E500') {
        router.push("/sorry");
      }
    }
  };

  return (
    <>
    {contextHolder}
    <div className="max-[755px]:hidden">
      <Image
        preview={false}
        alt="管理者用ログイン画面の背景画像"
        src="/images/adminlogin.png"
      />
    </div>
    <div className="min-[755px]:hidden">
      <Image
        preview={false}
        alt="管理者用ログイン画面の背景画像"
        src="/images/adminloginsp.png"
      />
    </div>
    <div className="fixed inset-0 flex items-center justify-center">
      <Card>
        {loading && <Spin tip="Loading..." size="large"></Spin>}
        {!loading &&
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 300, padding: "clamp(0.625rem, -0.268rem + 4.464vw, 2.75rem)" }}
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item<FieldType>
              name="whoareyou"
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Who are you?" style={{ marginBottom: "1.5rem" }} />
            </Form.Item>

            <Form.Item
              name="password"
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                style={{ marginBottom: "1.5rem" }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        }
      </Card>
    </div>
    </>
  )
}

export default AdminLogin;
