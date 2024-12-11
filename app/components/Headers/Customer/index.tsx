'use client';
import dynamic from "next/dynamic";
const HeaderNews = dynamic(() => import("./HeaderNews"), { ssr: false });
const HeaderContact = dynamic(() => import("./HeaderContact"), { ssr: false });
const HeaderBottom = dynamic(() => import("./HeaderBottom"), { ssr: false });
import { useEffect, useState } from "react";
import './index.scss';
import { GetInfo } from "@/app/services/ApiCustomerServices";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const GetUserInfo = async () => {

    const token = localStorage.getItem("token");
    if (token) {
      const user = await GetInfo();
      if (!user) {
        return
      }
      if (!user.data) {
        return
      }
      setUser(user.data);
      setIsLogin(true);
    }
  }

  useEffect(() => {
    setIsClient(true);
    GetUserInfo();
  }, []);

  if (!isClient) return null;

  return (
    <header className="header">
      <div className="header_top">
        <HeaderNews />
        <HeaderContact />
      </div>
      <HeaderBottom isLogin={isLogin} user={user} />
    </header>
  );
}

export default Header;
