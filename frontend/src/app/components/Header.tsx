import type React from "react";
import DomainItem from "./DomainItem";
import { useAppSelector } from "../hooks";


type HeaderProps = {
  isMenu: boolean;
  selectDomain?: "Dashboard" | "支出管理" | "固定費" | "貯金目標";
}

const Header: React.FC<HeaderProps> = ({isMenu=true, selectDomain}) => {
  const domains = [ "Dashboard", "支出管理", "固定費" , "貯金目標" ];
  const user = useAppSelector((state) => state.auth.user);
  const handleLogout = () => {
    // 未実装。後ほどログアウト処理（token破棄）を実装する。
  };

  return(
    <div className="h-1/12 w-full p-3 flex justify-between bg-white shadow-sm">
      <div className="h-11/12 w-1/5 flex justify-center items-center">
        <h1 className="font-bold text-2xl">まるっとMoneger</h1>
      </div>

      {isMenu && (
        <div className="h-full w-2/5 pr-7 flex justify-between items-center">
          {domains.map((domain) => 
            <DomainItem key={domain} domain={domain} isActive={domain === selectDomain} />
          )}

          {user && (<p>{user.name}さん</p>)}
          
          <button onClick={handleLogout}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
            </svg>
          </button>

        </div>
      )}
    </div>
  );
};


export default Header;