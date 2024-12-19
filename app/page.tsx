import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khánh Hùng',
  description: 'Khánh Hùng',
}

import Header from './components/Headers/Customer';
import './styles/home.css'
import AuthTabs from "./components/HomPage/FormAuth";
import InTro from './components/HomPage/InTro';
import Ceo from './components/HomPage/InTro/ceo';
import Faqs from './components/HomPage/faqs'

export default async function Home() {


  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id='section_1' className="mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <InTro />
            <AuthTabs />
            <div className='block w-full mt-5 md:hidden'>
              <Ceo />
            </div>
          </div>
        </section>
        <section id='faqs' className="relative">
          <Faqs/>
        </section>
      </main>
    </>
  );
}
