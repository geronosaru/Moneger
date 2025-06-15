import * as Tabs from "@radix-ui/react-tabs";
import type React from "react";


type TabTriggerProps = {
  value: "income" | "expense";
  title: string;
};

const TabTrigger: React.FC<TabTriggerProps> = ({value, title}) => (
  <>
    <Tabs.Trigger 
      value={value}
      className={`px-4 py-2 w-1/2 rounded-t bg-gray-300 ${value === "income" ? "data-[state=active]:bg-cyan-200": "data-[state=active]:bg-red-200" } transition-all duration-300`}
    >
      {title}
    </Tabs.Trigger>
  </>

);


export default TabTrigger;