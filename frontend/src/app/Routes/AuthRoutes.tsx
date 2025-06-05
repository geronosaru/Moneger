import { Route } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";


export default [
  <Route path="/register" key={"/register"}/>,
  <Route path="/login" element={<LoginPage />} key={"/login"} />,
  <Route path="/logout" key={"/logout"} />,
]