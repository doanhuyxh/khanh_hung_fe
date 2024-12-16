import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import HeaderNews from "./HeaderNews";
import HeaderContact from "./HeaderContact";
import './index.scss';
import { Customer } from "@/app/types";

const HeaderBottom = dynamic(() => import("./HeaderBottom"), {
  ssr: true,
  loading: () => <></>,
});

const Header = async ({user}: {user: Customer}) => {
  try {
    


    return (
      <header className="header">
        <div className="header_top">
          <HeaderNews />
          <HeaderContact />
        </div>
        <HeaderBottom isLogin={user.id !== undefined && user.id !== null && user.id !== ''} user={user} />
      </header>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <></>;
  }
};

export default Header;
