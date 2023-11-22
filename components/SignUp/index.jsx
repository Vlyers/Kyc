import React from "react";
import styles from "@/components/SignUp/index.module.css";

const SignUp = () => {
  return (
    <div className={`${styles.container} h-screen`}>
      <div className="flex-[6.5] flex justify-center items-center">
        <img
          className={`${styles.imag}`}
          src={"/Stuck at Home Brainstorming.png"}
          alt=""
        />
      </div>
      <div className={`${styles.frame_container}`}>
        <div className={`${styles.frame}`}>
          <div
            className={`${styles.head_frame} text-white text-[40px] font-segoe font-bold`}
          >
            Register to KYC
          </div>
          <div
            className={`${styles.body_frame} font-segoe text-[20px] text-white font-bold`}
          >
            <div className={`flex flex-row gap-[25px] mt-[15px]`}>
              <div className={`flex-[1]`}>
                <div>Name</div>
                <div>
                  {" "}
                  <input
                    type="text"
                    className="w-full h-10 rounded-[5px]"
                  />{" "}
                </div>
              </div>
              <div className={`flex-[1]`}>
                <div>Username</div>
                <div>
                  <input type="text" className="w-full h-10 rounded-[5px] border-solid border-[1px] border-[#797979]" />
                </div>
              </div>
            </div>

            <div className="mt-[15px]">
              <div>Email</div>
              <div>
                <input type="text" className="w-full h-10 rounded-[5px] border-solid border-[1px] border-[#797979]" />
              </div>
            </div>
            <div className="mt-[15px] pb-[15px]">
              <div>Password</div>
              <div>
                <input type="text" className="w-full h-10 rounded-[5px] border-solid border-[1px] border-[#797979]"  />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-[39px] ">
            <button className="bg-[#4EABDF] w-[283px] h-[58px] rounded-[10px] font-segoe text-white font-bold text-[24px] border-solid border-[1px] border-[#797979]">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
