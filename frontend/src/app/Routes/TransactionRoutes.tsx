import { Route } from "react-router-dom";
import TransactionStorePage from "../../features/Transaction/pages/TransactionStorePage";
import Dashboard from "../../features/Transaction/pages/Dashboard";

export default [
  <Route path="/dashboard" element={<Dashboard />} />,
  <Route path="/transaction/store" element={<TransactionStorePage />} />
]