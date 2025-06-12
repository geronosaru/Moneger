import Dashboard from "../../features/Transaction/pages/Dashboard";
import TransactionStorePage from "../../features/Transaction/pages/TransactionStorePage";
import { Route } from "react-router-dom";


export default [
  <Route path="/dashboard" element={<Dashboard />} />,
  <Route path="/transaction/store" element={<TransactionStorePage />} />
];