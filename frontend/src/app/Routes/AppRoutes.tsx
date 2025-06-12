import { BrowserRouter, Routes } from "react-router-dom"
import authRoutes from "./AuthRoutes"
import GenreRoutes from "./GenreRoutes"
import TransactionRoutes from "./TransactionRoutes"


const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        {authRoutes}
        {GenreRoutes}
        {TransactionRoutes}
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes