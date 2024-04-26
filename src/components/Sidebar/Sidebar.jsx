import { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extend, setextend] = useState(false);

  return (
    <div className="sidebar text-[#e3e3e3]  min-h-screen inline-flex justify-between flex-col bg-[#1e1f20] p-[25px] px-[15px] ">
      <div className="top">
        <img
          onClick={() => setextend(prev => !prev)}
          src={assets.menu_icon}
          alt=""
          className="Menu w-5  block ml-[10px] cursor-pointer rounded-full"
        />
        <div className="new_chat mt-[10px] inline-flex items-center gap-[10px] p-[10px] px-[15px] bg-[#121414] rounded-full cursor-pointer">
          <img src={assets.plus_icon} alt="" className="w-5" />
          {extend ? <p>New chat </p> : null}
        </div>
        {extend ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
            <div className="recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#747575] ">
              <img src={assets.message_icon} alt="" className="w-5" />
              <p>what is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col ">
        <div className="bottom-item flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#747575]">
          <img src={assets.question_icon} alt="" className="w-5 " />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#747575]">
          <img src={assets.history_icon} alt="" className="w-5" />
          {extend ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer hover:bg-[#747575] ">
          <img src={assets.setting_icon} alt="" className="w-5" />
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
