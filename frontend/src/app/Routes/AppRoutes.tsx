import authRoutes from "./AuthRoutes"
import GenreRoutes from "./GenreRoutes"
import TransactionRoutes from "./TransactionRoutes"
import { BrowserRouter, Routes } from "react-router-dom"


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {authRoutes}
      {GenreRoutes}
      {TransactionRoutes}
    </Routes>
  </BrowserRouter>
);


export default AppRoutes