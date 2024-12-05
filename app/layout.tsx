import Head from "next/head";
import { geistSans, geistMono, metadata } from "./configs/layout-config";
import "./styles/global.css";
import Header from "./components/Headers";
import { ModalNotify } from "./components/Modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = typeof metadata.title === "string" ? metadata.title : "Title";
  const description =
    typeof metadata.description === "string"
      ? metadata.description
      : "Description";

  return (
    <html lang="vi">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="nextjs, layout, meta tags" />
        <meta name="author" content="Khanh hung " />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="main">{children}</main>
        <ModalNotify />
      </body>
    </html>
  );
}
