import { geistSans, geistMono, metadata } from "./configs/layout-config";
import "./styles/global.css";
import Header from "./components/Headers";

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
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
