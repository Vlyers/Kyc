import React from "react";
import styles from "@/components/SignIn/index.module.css";

const SignIn = () => {
  return (
    <div className={`${styles.container} flex h-screen items-center`}>
      <div>
        <img
          className={"w-[650px] pl-[150px]"}
          src={"/Stuck at Home Brainstorming.png"}
        />
      </div>

      <div className={`${styles.frame}`}>
      <div className={"mt-[50px]"}>
        <img
          className={"w-[100px]"}
          src={"/Stuck at Home Brainstorming.png"}
        />
      </div>
        <div className={`${styles.texthead} font-segoe`}>Welcomes Back!</div>
        <div className={"font-segoe"}>Login in to Continue</div>
      </div>
    </div>
  );
};

export default SignIn;
