import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MessagesStoriesBar from "@/components/MessagesStoriesBar";
import MainChatBar from "@/components/MainChatBar";
import MainSharedBar from "@/components/MainSharedBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="w-full h-screen overflow-hidden">
        <div className="h-[10%]">
          <Topbar />
        </div>

        <div className="flex h-[90%]">
          <MessagesStoriesBar />
          <MainChatBar />
          <MainSharedBar />
        </div>
      </div>
    </div>
  );
}
