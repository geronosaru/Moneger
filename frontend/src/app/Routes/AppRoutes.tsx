import { BrowserRouter, Route, Routes } from "react-router-dom"
import authRoutes from "./authRoutes"
import Dashboard from "../components/Dashboard"
import GenreRoutes from "./GenreRoutes"


const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {authRoutes}
        {GenreRoutes}
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes