import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TransactionForm } from "../schema/transactionFormSchema";


const BASE_URL = 'http://localhost/api/transactions'

/**収支一覧取得（選択した月の収支一覧を取得する。初期値は今月） */
const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async() => {
  
})

/**収支詳細取得（選択した日付の収支詳細を取得する。初期値は今日） */
const fetchTransactionDetail = createAsyncThunk('transaction/fetchTransactionDetail', async() => {

})

/**収支記録 */
const storeTransaction = createAsyncThunk('transaction/storeTransaction', async(data: TransactionForm) => {
  const response = await axios.post(BASE_URL, data, {
    withCredentials: false
  })
  return response.data.transaction
})

/**収支変更 */
const updateTransaction = createAsyncThunk('transaction/updateTransaction', async(data:any) => {
  
})

/**収支削除 */
const deleteTransaction = createAsyncThunk('transaction/updateTransaction', async(data:any) => {
  
})


export { fetchTransactions, fetchTransactionDetail, storeTransaction, updateTransaction, deleteTransaction }