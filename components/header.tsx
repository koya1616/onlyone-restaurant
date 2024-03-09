import React from 'react';
import Link from 'next/link';
import { Image, Flex } from 'antd';

const Header = () => {
  return (
    <>
    <Link href="/">
    <Flex align="center" gap="small" style={{ margin: "2rem clamp(0.625rem, -0.625rem + 6.25vw, 5rem) clamp(1rem, 0.714rem + 1.429vw, 2rem)" }}>
      <Image
        width="clamp(2.5rem, 1.786rem + 3.571vw, 5rem)"
        height="clamp(2.5rem, 1.786rem + 3.571vw, 5rem)"
        preview={false}
        alt="Logo Image"
        src="/images/logo.png"
      />
      <div style={{ fontSize: "clamp(0.75rem, 0.393rem + 1.786vw, 2rem)" }}>オリワン</div>
    </Flex>
    </Link>
    <hr style={{ border: "none", borderTop: "2px solid", margin: "0 clamp(0.625rem, -0.446rem + 5.357vw, 4.375rem)" }}/>
    </>
  )
}

export default Header;