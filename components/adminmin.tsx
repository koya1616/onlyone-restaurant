'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Modal, Table, Tag, message } from 'antd';
import type { TableColumnsType } from 'antd';
import thanks from '../request/approvePendingRestaurant.post';

interface DataType {
  id: number;
  name: string;
  information: string;
  isapproved: boolean;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '店名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'お店情報',
    dataIndex: 'information',
    ellipsis: true,
  },
  {
    title: '認証済み？',
    dataIndex: 'isapproved',
    width: 115,
    render: (_, { isapproved }) => (
      <>
        {isapproved && <Tag color='geekblue'>認証済み</Tag>}
        {!isapproved && <Tag color='green'>未認証</Tag>}
      </>
    ),
    filters: [
      {
        text: '未認証',
        value: false,
      },
      {
        text: '承認済み',
        value: true,
      },
    ],
    onFilter: (value: boolean | React.Key, record) => record.isapproved === value,
  },
  {
    title: '承認',
    width: 115,
  },
];

const Adminmin = ({
  pendingRestaurants,
  loading,
}: {
  pendingRestaurants: { id: number, name: string, information: string, isapproved: boolean}[],
  loading: boolean,
}) => {
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [pendingRestaurant, setPendingRestaurant] = useState<DataType>();
  const [messageApi, contextHolder] = message.useMessage();

  const nipple = columns.map((item) => {
    if (item.title !== '承認') {
      return item;
    }
    return {
      ...item,
      render: ( _: any, record: DataType) => <Button type="primary" onClick={() => confirmApprove(record)}>承認する</Button>
    };
  });

  const confirmApprove = (record: DataType) => {
    setIsModalOpen(true)
    setPendingRestaurant(record);
  }

  const handleApprove = async () => {
    await thanks(pendingRestaurant?.id ? pendingRestaurant.id : 0)
      .then(() => {
        setIsModalOpen(false)
        messageApi.open({
          type: 'success',
          content: '承認した！ありがとう！リロードするからちょい待ち！',
          onClose: () => window.location.reload()
        });
      })
      .catch((e) => {
        setIsModalOpen(false)
        if (e.message === 'E401') {
          setIsErrorModalOpen(true)
        }
        if (e.message === 'E500') {
          router.push("/sorry");
        }
      });
  }

  return (
    <>
      {contextHolder}
      <Table
          className='m-2'
          scroll={{ x: 400 }}
          bordered={true}
          columns={nipple}
          dataSource={pendingRestaurants}
          pagination={{ position: ['bottomCenter'] }}
          size='large'
          loading={loading}
        />
        <Modal title="お店を承認しますか？"
          open={isModalOpen}
          footer={[
            <Button key="back" onClick={() => setIsModalOpen(false)}>
              キャンセル
            </Button>,
            <Button key="submit" type="primary" onClick={() => handleApprove()}>
              承認
            </Button>,
          ]}
        >
          <p>{pendingRestaurant?.name}</p>
          <p>{pendingRestaurant?.information}</p>
        </Modal>
        <Modal title="認証エラーだよ！"
          open={isErrorModalOpen}
          footer={[
            <Button key="submit" type="primary" href="/admin/login">
              再ログイン
            </Button>,
          ]}
        >
        </Modal>
    </>
  )
}

export default Adminmin;
