import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TransactionForm } from "../schema/transactionFormSchema"


type TempTransactionFormSlice = {
  data: Partial<TransactionForm>
  status: 'idle' | 'pending' | 'successful' | 'failed'
  errors: undefined | string
}

const initialState: TempTransactionFormSlice = {
  data: {},
  status: 'idle',
  errors: undefined
}

const tempTransactionFormSlice = createSlice({
  name: "tempTransactionFormSlice",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<TransactionForm>>) => {
      state.data = action.payload
    },
    clearFormData: (state) => {
      state.data = {}
      state.status = 'idle'
      state.errors = undefined
    },
    setStatus: (state, action: PayloadAction<TempTransactionFormSlice['status']>) => {
      state.status = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errors = action.payload
    }
  }
})


export const {
  setFormData,
  clearFormData,
  setStatus,
  setError
} = tempTransactionFormSlice.actions

const tempTransactionFormReducer = tempTransactionFormSlice.reducer

export {tempTransactionFormReducer} 