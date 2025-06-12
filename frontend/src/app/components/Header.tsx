import type React from "react";
import { useAppSelector } from "../hooks";


type HeaderProps = {
  isMenu: boolean;
  selectDomain?: "Dashboard" | "支出管理" | "固定費" | "貯金目標"
}

const Header: React.FC<HeaderProps> = ({isMenu=true, selectDomain}) => {
  const domains = [
    "Dashboard", "支出管理", "固定費" , "貯金目標"
  ]
  // ここ後ほどリンクを踏んで行けるようにしておくこと
  const user = useAppSelector((state) => state.auth.user);
  const handleLogout = () => {
    // 未実装
  }
  return(
    <>
      <div className="h-1/12 w-full p-3 flex justify-between bg-white shadow-sm">
      {/* 余裕があればロゴを作る */}
        <div className="h-11/12 w-1/5 flex justify-center items-center">
          <h1 className="font-bold text-2xl">まるっとMoneger</h1>
        </div>
        {
          isMenu && (
            <>
              <div className="h-full w-2/5 pr-7 flex justify-between items-center">
                {
                  domains.map((domain) => {
                    return(
                      <>
                        <p
                          key={domain}
                          className={domain === selectDomain ? "text-purple-600" :"text-slate-600"}
                        >{domain}</p>
                      </>
                    )
                  })
                }
                {
                  user && (
                    <p>{user.name}さん</p>
                  )
                }
                <p
                  onClick={handleLogout}
                >ログアウト</p>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}


export default Header;