import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Navbar />
      <h1 className="text-2xl font-semibold">Welcome to dashboard app</h1>
    </div>
  );
}
