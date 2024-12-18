'use client';

import React, { useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenuItem from "./HeaderMenuItem";
import Auth from "./Auth";

import { Customer } from "@/app/libs/types";

import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";

const menuItems = [
  { href: "", icon: "/assets/images/add-friend.svg", text: "Kết bạn" },
  { href: "", icon: "/assets/images/ic-chanel-group.svg", text: "Colleague Club" },
  { href: "", icon: "/assets/images/question-1.svg", text: "Hỏi tôi" },
  { href: "", icon: "/assets/images/ic-chanel-7.svg", text: "Hoạt động" },
  { href: "", icon: "/assets/images/ic-chanel-2.svg", text: "Blog" },
  { href: "", icon: "/assets/images/icon_fb.svg", text: "Fanpage" },
  { href: "", icon: "/assets/images/MTczMjAwNjc1MQ.png", text: "Tiktok" },
];

const HeaderBottom = () => {

  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState<Customer>({} as Customer);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    axiosCustomerConfig.get("/customer/get-info")
    .then((res:any) => {
      const code = res.code
      if (code === 200) {
        setIsLogin(true);
        setUser(res.data);
      };
    })
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>
  }

  return (
    <div className="header_bottom">
      <div className="container">
        <div className="header_bottom_wrapper">
          <HeaderLogo isLogin={isLogin} />
          <div className="header_bottom_wrapper_middle">
            <div className="header_bottom_wrapper_middle_list">
              {menuItems.map((item, index) => (
                <HeaderMenuItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="header_bottom_wrapper_right">
            <Auth isLogin={isLogin} user={user} />
          </div>
        </div>
      </div>
    </div>)
}
export default HeaderBottom;
