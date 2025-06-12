import type React from "react";
import type { ReactNode } from "react";
import Header from "./Header";


type TemplateProps= {
  isMenu: boolean;
  selectDomain?: "Dashboard" | "支出管理" | "固定費" | "貯金目標";
  children: ReactNode;
};

const Template: React.FC<TemplateProps> = ({
  isMenu=true, 
  selectDomain, 
  children
}) => (
  <div className="h-screen w-screen flex flex-col bg-slate-100">
    <Header isMenu={isMenu} selectDomain={selectDomain}/>
    <div className="flex-1 h-full w-full flex justify-center items-center">
      {children}
    </div>
  </div>
);


export default Template;