import type React from "react";
import { Link } from "react-router-dom";
import type { Transaction } from "../types";
import dayjs from "dayjs";


type TransationDetailListProps = {
  transactions: Transaction[];
  selectedDate: Date | undefined;
}

const TransactionDetailList: React.FC<TransationDetailListProps> = ({transactions, selectedDate}) => {
  const selectedTransactions = transactions.filter((transaction) => {
    return dayjs(transaction.date).isSame(dayjs(selectedDate?.toString()).format('YYYY-MM-DD'),'day')
  })
  if(selectedTransactions.length > 0){
    return(
      <>
        <ul className="h-96 w-full p-5 space-y-2 bg-slate-100 m-5 overflow-auto">
          {
            selectedTransactions.map((transaction) => {
              return(
                <li 
                  key={transaction.id}
                  className="h-28 w-full p-2 rounded-md shadow-md bg-white"
                >
                  <div className="h-full w-full flex flex-col space-y-1.5">
                    <p className="h-3">{transaction.type === 'income' ? '収入' : '支出'}</p>
                    <div className="h-10 w-full flex justify-center items-center">
                      <p className={`text-xl ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{transaction.amount}</p>
                    </div>
                    <p>{transaction.memo}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }else{
    return(
      <>
        <div className="h-full w-full p-20 flex flex-col justify-center items-center">
          <p className="text-slate-500">登録がありません</p>
          <div className="h-10 w-full flex justify-end items-center">
            <Link to={'/transaction/store'} className="text-blue-500 underline">新規登録はこちら</Link>
          </div>
        </div>
      </>
    )
  }
}


export default TransactionDetailList