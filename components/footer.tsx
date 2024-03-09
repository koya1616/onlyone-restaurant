import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full bg-[#F3F4F6]">
      <footer className="text-center p-10 text-[#374151] font-roboto">
        <div className="mb-4">
          <Link href="/restaurants/request" className="text-[#374151] hover:text-[#2563EB] mx-2" target="_blank">
            お店の登録したいユーザー様
          </Link>
          <Link href="/restaurants/request" className="text-[#374151] hover:text-[#2563EB] mx-2" target="_blank">
            お店の登録したい店舗様
          </Link>
        </div>
        © 2023 All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;