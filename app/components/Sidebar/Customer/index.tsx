"use client";

import Image from "next/image";
import BlockItem from "./BlockItem";
import "./index.scss";
import { useEffect, useState } from "react";

function Sidebar() {

  const menu = [
    {
      title: "Quyền lợi riêng cho bạn",
      menuItems: [
        {
          name: "Đặt lich hẹn Free mentor",
          imageSrc:"/assets/images/ic-chanel-calendar.svg",
          link: ""
        },
        {
          name: "Đăng ký Free Setup",
          imageSrc:"/assets/images/ic-chanel-setup.svg",
          link: ""
        },
        
      ]
    },
    {
      title: "Profile",
      menuItems: [
        {
          name: "Dashboard",
          imageSrc:"/assets/images/mb-ic-1.svg",
          link: ""
        },
        {
          name: "Đổi mật khẩu",
          imageSrc:"/assets/images/mb-ic-2.svg",
          link: ""
        },
        {
          name: "Profile C1",
          imageSrc:"/assets/images/mb-ic-3.svg",
          link: ""
        },
        {
          name: "Ticket của bạn",
          imageSrc:"/assets/images/mb-ic-4.svg",
          link: ""
        },
        {
          name: "Thông báo của bạn",
          imageSrc:"/assets/images/ic-history-email.svg",
          link: ""
        },
        
      ]
    },
    {
      title: "Kinh doanh cùng tôi",
      menuItems: [
        {
          name: "Dashboard Affiliate",
          imageSrc:"/assets/images/ic-chanel-calendar.svg",
          link: ""
        },
        {
          name: "Chính sách Affiliate",
          imageSrc:"/assets/images/mb-ic-11.svg",
          link: ""
        },
        {
          name: "Ambassador-offer",
          imageSrc:"/assets/images/coupon-code.svg",
          link: ""
        }        
      ]
    },
    {
      title: "Về khoá học",
      menuItems: [
        {
          name: "Chương trình học",
          imageSrc:"/assets/images/ic-chanel-4-side-menu.svg",
          link: ""
        },
        {
          name: "Quyền lợi",
          imageSrc:"/assets/images/ic-chanel-5.svg",
          link: ""
        },
        {
          name: "Thông tin về chúng tôi",
          imageSrc:"/assets/images/ic-chanel-3-side-menu.svg",
          link: ""
        },
        {
          name: "Q&A",
          imageSrc:"/assets/images/ic-chanel-6-side-menu.svg",
          link: ""
        }        
      ]
    }
  ]

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  })

  if (!isClient) return null;

  return (
    <div className="sidebar_container">
      <div className="sidebar_content">
        <div className="sidebar_top">
          <a href="" className="sidebar_top_wrap">
            <span className="icon_thunder">
              <Image
                width={20}
                height={31}
                alt=""
                src={"/assets/images/ic-thunder.svg"}
              />
            </span>
            <span>Học ngay</span>
          </a>
        </div>

        <div className="stitebar_body">
          <div className="stitebar_body_wrap">
            <div
              style={{
                height: "43.9941px",
                width: "228.008px",
                opacity: 0,
                transform: "translateY(80.1855px)",
              }}
            />
            {menu.map((item, index) => {
              return <BlockItem title={item.title} menuItems={item.menuItems} key={index}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;