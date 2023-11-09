import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      {/* App layout */}
      <div className="w-full flex items-center justify-center bg-gray-300 h-screen">
        <p className="font-semibold text-2xl">APP LAYOUT</p>
      </div>
    </div>
  );
}
