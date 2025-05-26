import { BrowserRouter, Route, Routes } from "react-router-dom"
import authRoutes from "./authRoutes"
import Dashboard from "../components/Dashboard"


const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {authRoutes}
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes