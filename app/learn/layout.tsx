'use client';
import { useEffect, useState } from "react";
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
