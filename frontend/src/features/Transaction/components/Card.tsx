import type React from "react";


type CardProps = {
  title: string;
  color?: string;
  data: number;
}

const colorClassMap = {
  green: "text-green-800",
  red: "text-red-800",
} as const

const Card: React.FC<CardProps> = ({title, data, color}) => {
  const textClass = color ? colorClassMap[color as keyof typeof colorClassMap] : "text-slate-800"

  return(
    <>
      <div className="h-24 w-80 p-3 rounded-md bg-white">
        <div className="h-full w-full flex flex-col justify-start">
          <p className="w-full text-slate-500">{title}</p>
          <div className="flex-1 h-full w-full pt-2 flex justify-center items-center">
            <p className={`${textClass} text-2xl`}>{data}円</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Card;