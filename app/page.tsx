import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Khánh Hùng',
    description: 'Khánh Hùng',
}

import Header from './components/Headers/Customer';
import './styles/home.css'
import AuthTabs from "./components/Form/FormAuth";

export default async function Home() {


  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
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
