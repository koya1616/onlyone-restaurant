'use client';

import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Image, Flex, message, Upload } from 'antd';
import { v4 as uuidv4 } from 'uuid';

// 認証するなら、cookieを使う
const INeedYou = ({
  params,
  images,
}: {
  params: { id: string },
  images: string[],
}) => {
  const [uploadFiles, setUploadFiles] = useState<string[]>([]);

  useEffect(() => {
    setUploadFiles(images);
  }, [images]);

  const props: UploadProps = {
    name: 'file',
    action: `${process.env.NEXT_PUBLIC_HONO_API_ENDPOINT}/upload/${params.id}/${uuidv4()}`,
    headers: {
      authorization: 'authorization-text',
    },
    showUploadList: false,
    onChange(info) {
      if (info.file.status === 'done') {
        setUploadFiles([...uploadFiles, info.file.response]);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        info.fileList.pop();
        message.error(`${info.file.name}のアップロードに失敗しました。再度お試しください。`);
      }
    },
  };

  const handleDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HONO_API_ENDPOINT}/restaurants/${uploadFiles[0]}/images`, {
      method: 'DELETE',
    });
    window.location.reload()
  }

  return (
    <div>
      <Flex vertical gap="middle" align="center" className='mx-auto mb-10'>
        {uploadFiles.map((url, index) => (
          <Image
            key={index}
            width={300}
            height={300}
            alt='restaurant image'
            className='object-cover'
            src={`https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/${url}`}
          />
        ))}
      </Flex>
      {uploadFiles.length < 3 &&
        <div className='text-center'>
          <Upload {...props}><Button icon={<UploadOutlined />}>Click to Upload</Button></Upload>
        </div>
      }
      {uploadFiles.length > 1 &&
        <div className='text-center'>
          <Button onClick={handleDelete}>削除</Button>
        </div>
      }
    </div>
  );
}

export default INeedYou;
