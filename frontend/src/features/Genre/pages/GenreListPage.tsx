import type React from "react";
import GenreList from "../components/GenreList";
import Template from "../../../app/components/Template";
import { BackPageIcon } from "../../../components/ui/Icons";


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
              <BackPageIcon />
              <p>元のページに戻る</p>
            </button>
          </div>
        </div>
      </Template>
    </>
  );
};


export default GenreListPage;