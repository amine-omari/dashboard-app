import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MessagesStoriesBar from "@/components/MessagesStoriesBar";
import MainChatBar from "@/components/MainChatBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex fixed w-full">
      <Navbar />
      <div className="w-full">
        <Topbar />
        <div className="flex">
          <MessagesStoriesBar />
          <MainChatBar />
        </div>
      </div>
    </div>
  );
}
