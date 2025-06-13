import type React from "react";
import Template from "../../../app/components/Template";
import Card from "../components/Card";
import Calendar from "../components/Calendar";
import TransactionDetailList from "../components/TransactionList";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../api/transactionApi";


const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.transaction.transactions);

  useEffect(() => {
    dispatch(fetchTransactions())
  },[])

  return(
    <>
      <Template isMenu selectDomain={"Dashboard"}>
        <div className="h-full w-full flex flex-col p-10">
          <div className="h-1/12 w-full">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          <div className="flex-1 h-24 w-full flex justify-center items-end px-7">
            <div className="h-full w-full flex flex-col">
              <div className="flex justify-between items-center space-x-5">
                <Card title="○月の収入" data={100000} color="green" />
                <Card title="○月の支出" data={50000} color="red" />
                <Card title="○月の総額" data={50000} />
                <Card title="総資産" data={50000} />
                <Card title="今月使用可能な残額" data={20000} />
              </div>
            </div>
          </div>
          <div className="h-4/6 w-full flex space-x-5 px-7">
            <div className="w-1/2 h-full flex justify-center items-center bg-white rounded">
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
            <div className="w-1/2 h-full flex jsutify-center items-center bg-white rounded">
              <TransactionDetailList transactions={transactions} selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </Template>
    </>
  )
}


export default Dashboard