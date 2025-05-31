import type React from "react";
import Template from "../../../app/components/Template";
import GenreList from "../components/GenreList";


const GenreListPage: React.FC = () => {
  return(
    <>
      <Template isMenu={false}>
        <div className="h-full w-full flex flex-col p-10">
          <div className="h-1/12 w-full">
            <h1 className="text-2xl font-bold">ジャンル一覧</h1>
          </div>
          <div className="flex-1 h-full w-full flex justify-center items-center">
            <GenreList />
          </div>
          <div className="h-1/12 w-full flex justify-start items-center pl-10">
            <button className="h-10/12 w-40 flex justify-center items-center rounded-lg text-white bg-purple-400 shadow-sm hover:shadow-none transition-shadow duration-200">
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0V6Z" clip-rule="evenodd"/>
              </svg>
              <p>元のページに戻る</p>
            </button>
          </div>
        </div>
      </Template>
    </>
  )
}
// この続きから

export default GenreListPage;