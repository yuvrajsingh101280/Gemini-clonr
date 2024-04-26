import { useContext } from "react";
import { assets } from "../../assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";
import { Context } from "../../context/Context";
import Loader from "../Loader/Loader";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    Input,
  } = useContext(Context);

  return (
    <div className="Main  flex-1 min-h-screen pb-[15vh] relative">
      <div className="nav  flex items-center justify-between text-[22px] p-[20px] text-white">
        <div className="left flex items-center gap-2">
          <p>Gemini</p>
          <div>
            <IoMdArrowDropdown />
          </div>
        </div>
        <div className="right">
          <img
            src={assets.user_icon}
            alt=""
            className="filter-none w-10 rounded-full"
          />
        </div>
      </div>

      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet  mt-[15px] mb-[45px] mx-[0] text-[56px] text-[#444746] font-medium p-4">
              <p>
                <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">
                  Hello, Yuvraj Singh
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards text-white flex  gap-[15px] p-3">
              <div className="card h-[200px] w-[200px] p-[16px] bg-[#1e1f20] text-[#e3e3e3] rounded-xl relative cursor-pointer hover:bg-[#333537]">
                <p className="text-[17px] text-[#e3e3e3]">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="w-[35px] p-[5px] absolute  bg-[#fcf9f9] rounded-[20px] bottom-[10px] right-[10px]"
                />
              </div>
              <div className="card h-[200px] w-[200px] p-[16px] bg-[#1e1f20] text-[#e3e3e3] rounded-xl relative cursor-pointer hover:bg-[#333537]">
                <p className="text-[17px] text-[#e3e3e3]">
                  Briefly summarize this concept urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="w-[35px] p-[5px] absolute  bg-[#fcf9f9] rounded-[20px] bottom-[10px] right-[10px]"
                />
              </div>
              <div className="card h-[200px] w-[200px] p-[16px] bg-[#1e1f20] text-[#e3e3e3] rounded-xl relative cursor-pointer hover:bg-[#333537]">
                <p className="text-[17px] text-[#e3e3e3]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="w-[35px] p-[5px] absolute  bg-[#fcf9f9] rounded-[20px] bottom-[10px] right-[10px]"
                />
              </div>
              <div className="card h-[200px] w-[200px] p-[16px] bg-[#1e1f20] text-[#e3e3e3] rounded-xl relative cursor-pointer hover:bg-[#333537]">
                <p className="text-[17px] text-[#e3e3e3]">
                  Improve the readability of the following code
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="w-[35px] p-[5px] absolute  bg-[#fcf9f9] rounded-[20px] bottom-[10px] right-[10px]"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result   pt-0 pb-0 px-[5%] max-h-[70vh] overflow-y-scroll ">
            <div className="result-title text-white   mt-10 mb-10 mx-0 flex items-center gap-5">
              <img
                src={assets.user_icon}
                alt=""
                className="filter-none w-10 rounded-full"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data text-white flex items-start gap-5">
              <img
                src={assets.gemini_icon}
                alt=""
                className="filter-none w-10 rounded-full"
              />

              {loading ? (
                <div className="loader  w-full ">
                  <Loader />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[17px] font-light leading-[1.8]"
                >
                
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={Input}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent border-none outline-none p-[8px] text-[18px] text-[#e3e3e3]"
            />
            <div className=" flex flex-row items-center gap-[15px]">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <div className="bottom-info">
            <p className="text-[#c4c7c5] text-[13px] mt-[15px] mb-[15x] mx-auto w-full text-center">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
