import type { TransactionForm } from "../schema/transactionFormSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = 'http://localhost/api/transactions';

/**収支一覧取得（収支一覧を取得する） */
const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async() => {
  const response = await axios.get(BASE_URL);
  return response.data.transactions;
});

/**選択した月の収支サマリーを取得する */
const fetchMonthlySummary = createAsyncThunk('transaction/fetchMonthlySummary', async(month: number) => {
  const response = await axios.get(BASE_URL, {
    params:{
      'month': month
    }
  });
  return response.data.summary
});


/**収支記録 */
const storeTransaction = createAsyncThunk('transaction/storeTransaction', async(data: TransactionForm) => {
  const response = await axios.post(BASE_URL, data);
  return response.data.transaction;
});

/**支出記録時の画像保存 */
const storeExpensePhoto = async(transactionId: number, file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  try{
    await axios.post(`${BASE_URL}/${transactionId}/photo`, formData, {
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Success to store the image');
  }catch(e){
    console.log('Fialed to store the image');
  }
};

/**収支変更 */
const updateTransaction = createAsyncThunk('transaction/updateTransaction', async(data:any) => {
  //
})

/**収支削除 */
const deleteTransaction = createAsyncThunk('transaction/updateTransaction', async(data:any) => {
  //
})


export { 
  fetchTransactions,
  fetchMonthlySummary,
  storeTransaction,
  storeExpensePhoto,
  updateTransaction,
  deleteTransaction
};