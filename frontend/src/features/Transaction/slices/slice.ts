import type { Transaction } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions, storeTransaction } from "../api/transactionApi";


type TransactionState = {
  transactions: Transaction[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  errors: undefined | string;
};

const initialState: TransactionState = {
  transactions: [],
  status: 'idle',
  errors: undefined
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //収支一覧取得
    .addCase(fetchTransactions.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
      state.status = 'succeeded';
    })
    .addCase(fetchTransactions.rejected, (state, action) => {
      state.errors = action.error.message;
      state.status = 'failed';
    })
    //収支記録
    .addCase(storeTransaction.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(storeTransaction.fulfilled, (state, action) => {
      if(!state.transactions){
        state.transactions = action.payload;
      }else{
        state.transactions = [...state.transactions, action.payload]
      }
      state.status = 'succeeded';
    })
    .addCase(storeTransaction.rejected, (state, action) => {
      state.errors = action.error.message;
      state.status = 'failed';
    })
  }
});

const transactionReducer = transactionSlice.reducer;


export default transactionReducer;