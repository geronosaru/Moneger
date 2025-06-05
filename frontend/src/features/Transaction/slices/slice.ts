import { createSlice } from "@reduxjs/toolkit";
import type { Transaction } from "../types";
import { storeTransaction } from "../api/transactionApi";


type TransactionState = {
  transaction: Transaction[];
  status: 'idle' | 'pending' | 'successful' | 'failed';
  errors: undefined | string;
}

const initialState: TransactionState = {
  transaction: [],
  status: 'idle',
  errors: undefined
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //収支一覧取得
    //収支詳細取得
    //収支記録
    .addCase(storeTransaction.pending, (state) => {
      state.status = 'pending'
    })
    .addCase(storeTransaction.fulfilled, (state, action) => {
      if(!state.transaction){
        state.transaction = action.payload
      }else{
        state.transaction = [...state.transaction, action.payload]
      }
      state.status = 'successful'
    })
    .addCase(storeTransaction.rejected, (state, action) => {
      state.errors = action.error.message
      state.status = 'failed'
    })
  }
})

const transactionReducer = transactionSlice.reducer;


export default transactionReducer;