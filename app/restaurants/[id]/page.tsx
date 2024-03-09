import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import { Carousel, Flex, Image } from 'antd';
import { InstagramOutlined, XOutlined, FacebookOutlined } from '@ant-design/icons';
import { FALLBACK } from '../../../concon/image-fallback';
import WhatIsThis from '../../../components/whatIsThis';
import WhatIsThat from '../../../components/whatIsThat';
import StyledIframe from '../../../components/styledIframe';

const getOnlyOneRestaurant = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/restaurants/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type Restaurant = {
  id: string;
  name: string;
  description: string;
  iframe: string;
  gmap: string;
}

const UIisImportant = async ({ params }: { params: { id: string } }) => {
  const data = await getOnlyOneRestaurant(params.id)
  return (
    <>
    <PC restaurant={data.restaurant} />
    <SP restaurant={data.restaurant} />
    </>
  );
}

export default UIisImportant;

const MapSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" stroke-width="1.5" />
  </svg>
);

const PC = ({ restaurant }: { restaurant: Restaurant }) => {
  return(
    <div className='w-5/6 mx-auto max-[900px]:hidden'>
      <Flex justify="space-between" align="center" className='my-8'>
        <div className='text-6xl tracking-widest animate-floatUp1'>{restaurant.name}</div>
        <div className='animate-floatUp2'>東京都 足立区</div>
      </Flex>
      <Image
        width={"100%"}
        height={600}
        className="object-cover animate-floatUp3"
        alt="restaurant image"
        src="/images/background1.jpeg"
        preview={false}
        fallback={FALLBACK}
      />
      <Flex justify="space-between" align="center" className='my-28 gap-x-9'>
        <div className='flex-1'>
          <WhatIsThis speed='fast'>
            <Image
              width={"100%"}
              className="object-cover"
              alt="restaurant image"
              src="https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/test%2F1.png"
              preview={false}
              fallback={FALLBACK}
            />
          </WhatIsThis>
        </div>
        <div className='flex-1'>
          <WhatIsThis>
            <div>{restaurant.description}</div>
          </WhatIsThis>
        </div>
      </Flex>
      <Flex justify="space-between" align="center" className='my-28 gap-x-9'>
        <div className='basis-7/12'>
          <WhatIsThat>
            <h2
              className='text-2xl md:text-3xl lg:text-4xl animate-jump-in animate-once animate-ease-linear animate-delay-[100ms]'
              style={{
                marginBottom: "clamp(0.25rem, -6.937rem + 14.375vw, 6rem)"
              }}
            >
              おすすめのメニュー
            </h2>
            <Flex justify="space-around" align="center" gap="clamp(1.25rem, -0.536rem + 4.762vw, 3.75rem) 20px" wrap="wrap">
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[200ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[300ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[400ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[500ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[600ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
              <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[700ms]'>
                <h3>カツカレー</h3>
                <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
              </div>
            </Flex>
          </WhatIsThat>
        </div>
        <div className='flex-1'>
          <WhatIsThat>
            <Image
              width={"100%"}
              className="object-cover animate-jump-in animate-once animate-ease-linear animate-duration-2000"
              alt="restaurant image"
              src="https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/test%2F1.png"
              preview={false}
              fallback={FALLBACK}
            />
          </WhatIsThat>
        </div>
      </Flex>
      <Flex justify="space-between" align="center" className='my-28 gap-x-9'>
        <div className='flex-1'>
          {parse(restaurant.iframe)}
        </div>
        <div className='flex-1'>
          <Flex justify="center" gap="middle" align="center">
            <Link href={restaurant.gmap} target="_blank"><MapSvg /></Link>
            <Link href="https://www.instagram.com/" target="_blank" style={{ color: "#000" }}><InstagramOutlined className='text-3xl' /></Link>
            <Link href="https://twitter.com" target="_blank" style={{ color: "#000" }}><XOutlined className='text-3xl' /></Link>
            <Link href="https://www.facebook.com/" target="_blank" style={{ color: "#000" }}><FacebookOutlined className='text-3xl' /></Link>
          </Flex>
        </div>
      </Flex>
    </div>
  )
}

const SP = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className='mx-auto min-[901px]:hidden'>
      <Flex className='my-10 w-11/12 min-[400px]:w-5/6 mx-auto' vertical>
        <div className='mb-4 text-2xl min-[400px]:text-3xl tracking-widest animate-floatUp1'>{restaurant.name}</div>
        <div className='animate-floatUp2 text-right'>東京都 足立区</div>
      </Flex>
      <Carousel autoplay speed={1000}>
        <Image
          width={"100%"}
          height={300}
          className="object-cover"
          alt="restaurant image"
          src="/images/background1.jpeg"
          preview={false}
          fallback={FALLBACK}
        />
        <Image
          width={"100%"}
          height={300}
          className="object-cover"
          alt="restaurant image"
          src="https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/test%2F1.png"
          preview={false}
          fallback={FALLBACK}
        />
        <Image
          width={"100%"}
          height={300}
          className="object-cover"
          alt="restaurant image"
          src="https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/test%2F2.png"
          preview={false}
          fallback={FALLBACK}
        />
      </Carousel>
      <div className='my-20 w-11/12 min-[400px]:w-5/6 mx-auto animate-fade animate-once animate-ease-in'>{restaurant.description}</div>
      <WhatIsThat>
        <h2
          className='text-2xl md:text-3xl lg:text-4xl my-8 animate-jump-in animate-once animate-ease-linear animate-delay-[100ms]'
          style={{
            textAlign: "center",
          }}
        >
          おすすめのメニュー
        </h2>
        <Flex justify="space-around" align="center" gap="clamp(1.25rem, -0.536rem + 4.762vw, 3.75rem) 20px" wrap="wrap">
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[200ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[300ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[400ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[500ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[600ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
          <div style={{ maxWidth: "clamp(7.5rem, 2.857rem + 12.381vw, 14rem)" }} className='animate-jump-in animate-once animate-ease-linear animate-delay-[700ms]'>
            <h3>カツカレー</h3>
            <p className="text-xs font-thin">商品の説明をここに書きます。目安文字数は〇〇です。</p>
          </div>
        </Flex>
      </WhatIsThat>
      <StyledIframe iframe={restaurant.iframe} />
      <Flex justify="center" gap="middle" align="center" className='my-8'>
        <Link href={restaurant.gmap} target="_blank"><MapSvg /></Link>
        <Link href="https://www.instagram.com/" target="_blank" style={{ color: "#000" }}><InstagramOutlined className='text-3xl' /></Link>
        <Link href="https://twitter.com" target="_blank" style={{ color: "#000" }}><XOutlined className='text-3xl' /></Link>
        <Link href="https://www.facebook.com/" target="_blank" style={{ color: "#000" }}><FacebookOutlined className='text-3xl' /></Link>
      </Flex>
    </div>
  )
}
