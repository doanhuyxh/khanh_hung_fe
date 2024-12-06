'use client';
import React from "react";
import Image from "next/image";
import { BurgerIcon } from "../Icon";

const HeaderLogo = ({isLogin}: {isLogin: boolean}) => (
  <div className="header_bottom_wrapper_left">
    {isLogin && <BurgerIcon />}
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
);

export default HeaderLogo;
