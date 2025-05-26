import type React from "react";
import Template from "../../../app/components/Template";
import { useForm } from "react-hook-form";
import { loginForm, type LoginForm } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";


const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginForm)
  })
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async(data: LoginForm) => {
    try{
      const result = await dispatch(loginUser(data));

      if(loginUser.fulfilled.match(result)){
        console.log('ログイン成功', result.payload);
        reset();
        navigate('/dashboard');
      }else{
        console.log('ログイン失敗', result)
      }
    }catch(e){
      console.log('例外発生', e)
    }
  }

  return(
    <>
    <div className="h-full w-full flex justify-center items-center">
      <Template isMenu={false}>
        <form
          className="size-96 p-10 flex flex-col rounded-lg shadow-sm bg-white"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="h-2/3 w-full px-5 py-3 flex flex-col justify-between">
            <div className="h-2/5 w-full flex flex-col space-y-0.5 justify-center items-center">
              <div className="w-full flex justify-start items-center">
                <label>メールアドレス</label>
              </div>
              <input 
                type="email"
                className="w-full border-2 p-1 rounded-sm border-slate-500"
                {...register('email')}
              />
              {errors.email && errors.email.message}
            </div>
            <div className="h-2/5 w-full flex flex-col space-y-0.5 justify-center items-center">
              <div className="w-full flex justify-start items-center">
                <label>パスワード</label>
              </div>
              <div className="relative w-full">
                <input 
                  type={showPassword? "text" : "password"}
                  className="w-10/12 border-2 p-1 pr-10 rounded-sm border-slate-500"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-500"
                >
                  {showPassword
                  ?
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  : 
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                  }
                </button>
              </div>
              {errors.password && errors.password.message}
            </div>
          </div>
          <div className="h-1/3 w-full flex justify-center items-end">
            <button
              className="h-3/6 w-3/5 bg-purple-500 rounded-lg shadow-sm hover:shadow-lg shadow-slate-400 transition-all duration-300"
              type="submit"
            >
              <p className="text-white text-xl">ログイン</p>
            </button>
          </div>
        </form>
      </Template>
    </div>
    </>
  )
}


export default LoginPage