import transactionReducer from "../features/Transaction/slices/slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/slice";
import { genreReducer } from "../features/Genre/slice";
import { tempTransactionFormReducer } from "../features/Transaction/slices/tempSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    genre: genreReducer,
    transaction: transactionReducer,
    tempTransactionForm: tempTransactionFormReducer
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export type { RootState, AppDispatch };
export { store };