import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "esh.",
  description: "Home Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ height: "100vh" }}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
