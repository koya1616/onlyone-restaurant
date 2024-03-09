'use client';

import React, { useState } from 'react';
import { Flex, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { StarFilled, NotificationFilled, SunFilled, TagsFilled, HeartFilled, EnvironmentOutlined } from '@ant-design/icons';
import MenuButtons from './menuButtons';
import LoveMovies from './loveMovies';

// const LoveMovies = dynamic(() => import('./LoveMovies'), { ssr: false });

const items: TabsProps['items'] = [
  {
    key: 'recommended',
    label: 'おすすめのお店',
    icon: <StarFilled />,
  },
  {
    key: 'notable',
    label: '注目されているお店',
    icon: <NotificationFilled />,
  },
  {
    key: 'popular',
    label: '人気のお店',
    icon: <HeartFilled />,
  },
  {
    key: 'new',
    label: '新着のお店',
    icon: <SunFilled />,
  },
  {
    key: 'searchByGenre',
    label: 'ジャンルでお店を探す',
    icon: <TagsFilled />,
  },
  {
    key: 'searchByArea',
    label: 'エリアからお店を探す',
    icon: <EnvironmentOutlined />,
  },
];

const WhatABeautifulDay = ({
  recommend,
  notable,
  popular,
  neeeeeeeeew,
}: {
  recommend: { id: number, name: string, description: string, gmap: string}[],
  notable: { id: number, name: string, description: string, gmap: string}[],
  popular: { id: number, name: string, description: string, gmap: string}[],
  neeeeeeeeew: { id: number, name: string, description: string, gmap: string}[],
}) => {
  const [activeBtn, setActiveBtn] = useState('recommended');

  const handleClick = (btnName: string) => {
    setActiveBtn(btnName);
  };

  const itemsWithProps = items.map((item) => {
    return {
      ...item,
      children: <LoveMovies recommend={recommend} notable={notable} popular={popular} neeeeeeeeew={neeeeeeeeew} activeBtn={activeBtn} />
    };
  });

  return (
    <>
      <div className="sm:hidden mt-4 mx-auto" style={{ maxWidth: "clamp(18.75rem, 1.786rem + 84.821vw, 78.125rem)"}}>
        <Tabs defaultActiveKey="1" type="card" items={itemsWithProps} onChange={(key: string) => setActiveBtn(key)} />
      </div>
      <div className="max-[640px]:hidden">
        <Flex gap="small" className="mt-10 mx-auto" style={{ maxWidth: "clamp(18.75rem, 1.786rem + 84.821vw, 78.125rem)"}}>
          <div className="mb-10"><MenuButtons activeBtn={activeBtn} handleClick={handleClick} /></div>
          <LoveMovies recommend={recommend} notable={notable} popular={popular} neeeeeeeeew={neeeeeeeeew} activeBtn={activeBtn} />
        </Flex>
      </div>
    </>
  )
}

export default WhatABeautifulDay;
