import React from 'react';
import { Image } from 'antd';

const Logo = () => {
  return (
    <>
      <div className="App text-center mt-6 relative">
        <Image
          preview={false}
          alt="Background Image"
          src="/images/background.jpeg"
          className="object-cover animate-floatUp"
          style={{ margin: "0 auto", maxWidth: "clamp(18.75rem, 0.893rem + 89.286vw, 81.25rem)", aspectRatio: "16/6"}}
        />
      </div>
    </>
  )
}

export default Logo;
