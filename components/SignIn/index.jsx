import React from 'react'
import styles from '@/components/SignIn/index.module.css'

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
            className={"w-[150px]"}
            src={"/Stuck at Home Brainstorming.png"}
          />
        </div>
        <div className={`${styles.bungkus}`}>
          <div className={`${styles.texthead} font-segoe`}>Welcome Back!</div>
          <div className={"font-segoe"}>Login in to Continue</div>
          <div className="mt-[30px]">
            <div className={`${styles.input}`}>Username</div>
            <div>
              <input className={`${styles.border}`} type="text" />
            </div>

            <div className="mt-[30px]">
              <div className={`${styles.input}`}>Password</div>
              <div>
                <input className={`${styles.border}`} type="text" />
              </div>
            </div>
          </div>
          <div className={`${styles.rememberdll} mt-[10px]`}>
            <div>
            <input className="rounded-[5px]" type="checkbox" />
            <label className="ml-[5px] font-segoe">Remember me</label>
            </div>
            <a href="/sign-up" className="hover:underline">Forgot Password</a>
          </div>
          <div className={`${styles.rememberdll} mt-[30px]`}>
            <button className="w-[200px] h-[50px] bg-[#4EABDF] rounded-[10px] font-semibold"><a href="/sign-up">Login</a></button>
            <button className="w-[200px] h-[50px] border-solid border-2 border-[#4EABDF] bg-white rounded-[10px] text-[#4EABDF] font-semibold">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn