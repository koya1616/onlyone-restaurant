import React from 'react';
import { Button, Result } from 'antd';

const HelpMe = () => {

  return (
    <>
      <Result
        status="500"
        title="500"
        subTitle="ごめんなさい、、、予期せぬエラーが発生しました。もう一度アクセスお願いします。"
        extra={<Button type="primary" href="/">Back Home</Button>}
      />
    </>
  )
}

export default HelpMe;
