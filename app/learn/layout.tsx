'use client';
import Header from "../components/Headers/Customer";

import "../styles/study.scss";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      {children}
    </>
  );
}
