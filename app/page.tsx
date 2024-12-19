import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khánh Hùng',
  description: 'Khánh Hùng',
}
import Image from 'next/image';
import './styles/home.css'
import Header from './components/Headers/Customer';
import AuthTabs from "./components/HomPage/FormAuth";
import InTro from './components/HomPage/InTro';
import Ceo from './components/HomPage/InTro/ceo';
import Faqs from './components/HomPage/faqs'
import HallOfFrame from './components/HomPage/hall_of_frame';
import ComingSoon from './components/HomPage/ComingSoon';


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
        <section id="hall_of_wall" className='w-full pb-50'>

          <div className='w-1/2 h-auto m-auto mb-10'>

            <div className='w-full mt-4 mb-10 animate-jump animate-once'>
              <Image src={"/assets/images/home/hall-of-fame-tt-up.png"} width={100} height={100} alt='' layout='responsive' className='w-full' />
            </div>

            <div className='w-full relative py-5'>
              <p className='desc'>Tổng hợp khoá học hàng đầu thị trường</p>
            </div>

          </div>

          <div className='grid md:gird-cols-2 grid-cols-3 gap-10 w-7/12 m-auto'>

            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />

            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />

            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />
            <HallOfFrame />

          </div>
        </section>

        <section id="coming_soon" className='w-full relative pt-0 pb-10'>
          <div className='w-full h-32 bg-[#580B94] absolute transform translate-y-[-100%] rounded-t-[50%] overflow-hidden'></div>

          <div className='w-8/12 flex flex-col m-auto items-center gap-30'>

            <div className='flex flex-col justify-center items-center  gap-20 text-white'>
              <p className='w-fit flex justify-center items-center gap-3 px-4 py-2 uppercase bg-[#f5851e] rounded-lg text-[1.8rem] text-nowrap text-center font-[700]'>
                <span className='w-7 h-auto'>
                  <Image src={"/assets/images/home/icon-time.svg"} width={50} height={50} style={{ width: '100%', height: 'auto' }} alt='' />
                </span>
                Coming soon
              </p>
              <h2 className='text-3xl text-center font-[700] scale-125 uppercase'>
                CÁC KHÓA HỌC SẮP RA MẮT <br />
                CỦA CÁC ĐỒNG NGHIỆP CỦA HÙNG</h2>
            </div>
            
            <ComingSoon />
          </div>
        </section>

        <section id='faqs' className="relative">
          <Faqs />
        </section>
      </main>
    </>
  );
}
