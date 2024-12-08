'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminSideBar } from '../components/Sidebar';
import { AdminHeader } from '../components/Headers';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const GetUser = () => {
    let userJson = localStorage.getItem("user") ?? "{}";
  
    if (userJson == "{}"){
      return false
    }

    return true

  };
  
  useEffect(() => {
    const user = GetUser();
    if (user) {
      setIsAuthenticated(true);
    } else {
      router.push('/admin_web/auth/login');
    }
  }, [router, isAuthenticated]);
  
  if (!isAuthenticated){
    return (
      <>
      {children}
      </>
    )
  }

  return (
    <>
      <div className="flex" style={{fontSize:"16px"}}>
        <AdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col">
          <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>

    </>
  );
}
