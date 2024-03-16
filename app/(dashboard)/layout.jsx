import { Poppins } from "next/font/google";
import "./dashboard.css";
import Header from "./_components/header/Header";
import { cn } from "@/lib/utils";
import MiniSideBar from "./_components/sidebar/MiniSideBar";
import SideBar from "./_components/sidebar/SideBar";
import TopHeader from "./_components/header/TopHeader";
import RightSideBar from "./_components/sidebar/RightSideBar";
import { MessageProvider } from "@/context/messageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mailbox",
  description: "Microsoft Outlook Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MessageProvider>
        <body className={cn(`${poppins.className} bg-[--primary-bg] w-full`)}>
          <Header />
          <div className="flex w-full">
            <div className="w-fit bg-[green] min-h-screen">
              <MiniSideBar />
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full">
                <TopHeader />
              </div>
              <div className="flex">
                <div className="w-[18%] h-full">
                  <SideBar />
                </div>

                <div className="flex h-screen w-full">
                  <div className="w-[26%]">
                    <RightSideBar />
                  </div>
                  <div className="w-[74%] flex relative">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </MessageProvider>
    </html>
  );
}
