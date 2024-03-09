import React from 'react';
import { Carousel, Image } from 'antd';

const Logo = () => {
  return (
    <>
      <div className="App text-center mt-6 relative">
        <Carousel autoplay speed={1000} fade>
          <div>
            <Image
              preview={false}
              alt="Background Image"
              src="/images/background1.jpeg"
              className="object-cover"
              style={{ margin: "0 auto", maxWidth: "clamp(18.75rem, 0.893rem + 89.286vw, 81.25rem)", aspectRatio: "16/7"}}
            />
          </div>
          <div>
            <Image
              preview={false}
              alt="Background Image"
              src="/images/background2.jpeg"
              className="object-cover"
              style={{ margin: "0 auto", maxWidth: "clamp(18.75rem, 0.893rem + 89.286vw, 81.25rem)", aspectRatio: "16/7"}}
            />
          </div>
          <div>
            <Image
              preview={false}
              alt="Background Image"
              src="/images/background3.jpeg"
              className="object-cover"
              style={{ margin: "0 auto", maxWidth: "clamp(18.75rem, 0.893rem + 89.286vw, 81.25rem)", aspectRatio: "16/7"}}
            />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Logo;
