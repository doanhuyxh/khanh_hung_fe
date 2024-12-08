import { Header } from './components/Headers';

export default async function Home() {
  // Delay 10 giây
  await new Promise((resolve) => setTimeout(resolve, 10000));

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
