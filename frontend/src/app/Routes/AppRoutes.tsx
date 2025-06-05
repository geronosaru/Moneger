import { BrowserRouter, Route, Routes } from "react-router-dom"
import authRoutes from "./AuthRoutes"
import Dashboard from "../components/Dashboard"
import GenreRoutes from "./GenreRoutes"
import TransactionRoutes from "./TransactionRoutes"


const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {authRoutes}
        {GenreRoutes}
        {TransactionRoutes}
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes