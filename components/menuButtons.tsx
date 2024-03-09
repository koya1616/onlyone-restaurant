'use client';
import React from 'react';
import { Flex, Button } from 'antd';
import { StarFilled, NotificationFilled, SunFilled, TagsFilled, HeartFilled, EnvironmentOutlined } from '@ant-design/icons';

const menuButtons = [
  { name: 'recommended', label: 'おすすめのお店', icon: <StarFilled /> },
  { name: 'notable', label: '注目されているお店', icon: <NotificationFilled /> },
  { name: 'popular', label: '人気のお店', icon: <HeartFilled /> },
  { name: 'new', label: '新着のお店', icon: <SunFilled /> },
  { name: 'searchByGenre', label: 'ジャンルでお店を探す', icon: <TagsFilled /> },
  { name: 'searchByArea', label: 'エリアからお店を探す', icon: <EnvironmentOutlined /> }
];

const MenuButtons = ({
  activeBtn,
  handleClick
}: {
  activeBtn: string,
  handleClick: (btnName: string) => void,
}) => {
  return (
    <>
      <Flex vertical gap="large">
        {menuButtons.map((button) => (
          <Button
            key={button.name}
            type={activeBtn === button.name ? "primary" : "default"}
            shape="round"
            icon={button.icon}
            size="large"
            onClick={() => handleClick(button.name)}
          >
            {button.label}
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default MenuButtons;