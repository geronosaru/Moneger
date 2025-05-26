import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/slice";


const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch


export { store }
export type { RootState, AppDispatch }