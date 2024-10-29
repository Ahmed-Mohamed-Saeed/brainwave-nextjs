import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brainwave",
  description: "Brainwave Next js based web application",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
