import "./globals.css";
import { Varta } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/modal";
import RegisterModal from "./components/modals/RegisterModal";

const font = Varta({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
