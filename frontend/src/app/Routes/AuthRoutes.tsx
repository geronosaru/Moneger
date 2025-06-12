import LoginPage from "../../features/auth/pages/LoginPage";
import { Route } from "react-router-dom";


export default [
  <Route path="/register" key={"/register"}/>,
  <Route path="/login" element={<LoginPage />} key={"/login"} />,
  <Route path="/logout" key={"/logout"} />,
];