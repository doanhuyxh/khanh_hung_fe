import { Header } from './components/Headers';

export default async function Home() {
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  

  return (
    <>
      <Header />
      <main>
        <div>
          Xin chào
        </div>
      </main>
    </>
  );
}
