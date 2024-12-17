import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Khánh Hùng',
    description: 'Khánh Hùng',
}
import { cookies } from "next/headers";
import { Customer } from "./libs/types";
import Header from './components/Headers/Customer';
import './styles/home.css'
import AuthTabs from "./components/Form/FormAuth";

export default async function Home() {

  const cookieStore = await cookies()
  const accessToken = cookieStore.get("AccessToken")
  const refreshToken = cookieStore.get("RefreshToken")
 

  let user: Customer = {} as Customer
  if (accessToken && refreshToken) {
    const res = await fetch('http://localhost:5035/api/v1/customer/get-info', {
      headers: {
        'Authorization': `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    if (res.ok) {
      const res_data = await res.json()
      user = res_data.data
    }

  } 

  return (
    <>
      <Header user={user}/>
      <main className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left side content */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">Chào mừng đến với nền tảng học tập</h1>
              <p className="text-xl lg:text-2xl mb-8">Nơi kiến thức được chia sẻ và phát triển</p>
            </div>
            <AuthTabs/>
          </div>
        </div>
      </main>
    </>
  );
}
