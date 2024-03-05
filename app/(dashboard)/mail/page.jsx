import TopHeader from "../_components/header/TopHeader";
import MiniSideBar from "../_components/sidebar/MiniSideBar";
import SideBar from "../_components/sidebar/SideBar";

const Inbox = () => {
  return (
    <>
      <div className="bg-[--seconday-bg] text-white flex">
        <MiniSideBar />

        <TopHeader />
        {/* <SideBar /> */}
      </div>
    </>
  );
};

export default Inbox;
