import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenuItem from "./HeaderMenuItem";
import Auth from "./Auth";

const menuItems = [
  { href: "", icon: "/assets/images/add-friend.svg", text: "Kết bạn" },
  { href: "", icon: "/assets/images/ic-chanel-group.svg", text: "Colleague Club" },
  { href: "", icon: "/assets/images/question-1.svg", text: "Hỏi tôi" },
  { href: "", icon: "/assets/images/ic-chanel-7.svg", text: "Hoạt động" },
  { href: "", icon: "/assets/images/ic-chanel-2.svg", text: "Blog" },
  { href: "", icon: "/assets/images/icon_fb.svg", text: "Fanpage" },
  { href: "", icon: "/assets/images/MTczMjAwNjc1MQ.png", text: "Tiktok" },
];

const HeaderBottom = ({isLogin, user}: {isLogin: boolean, user: any}) => (
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
  </div>
);

export default HeaderBottom;
