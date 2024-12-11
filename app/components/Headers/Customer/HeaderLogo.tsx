'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Sidebar } from "../../Sidebar";
import { BurgerIcon } from "../../Icon";

const HeaderLogo = ({ isLogin }: { isLogin: boolean }) => {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return(
    <>
      <div className="header_bottom_wrapper_left">
        {isLogin && <BurgerIcon isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>}
        <a href="">
          <span>
            <Image
              src="/assets/images/logo-png.png"
              width={100}
              height={100}
              alt="logo"
            />
          </span>
        </a>
      </div>

      <div className={`absolute top-40 left-0 w-screen h-screen transition  bg-black z-99999 bg-opacity-60 ${isOpenSidebar ? 'block': 'hidden'}`}>
        <Sidebar />
      </div>
    </>
  );
}
export default HeaderLogo;
