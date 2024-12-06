'use client';
import dynamic from "next/dynamic";
const HeaderNews = dynamic(() => import("./HeaderNews"), { ssr: false });
const HeaderContact = dynamic(() => import("./HeaderContact"), { ssr: false });
const HeaderBottom = dynamic(() => import("./HeaderBottom"), { ssr: false });
import { useEffect, useState } from "react";
import './index.scss';

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        const cookieValue = parts.pop()?.split(';').shift();
        return cookieValue;
      }
      return null;
    };

    const token = getCookie('token');
    if (token) {
      alert('token'); 
      setIsLogin(true);
    }
  }, []);

  if (!isClient) return null;

  return (
    <header className="header">
      <div className="header_top">
        <HeaderNews />
        <HeaderContact />
      </div>
      <HeaderBottom isLogin={isLogin} />
    </header>
  );
}

export default Header;
