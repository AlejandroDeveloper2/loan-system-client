import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@layout/index";

import {
  ClientsPage,
  UserPanelPage,
  LoanRequestPage,
  EditClientPage,
  LoansPage,
  LoanRequestViewPage,
} from "@pages/index";

const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      {/* Rutas privadas  */}
      <Route path="/userPanel" element={<PrivateLayout />}>
        <Route index element={<UserPanelPage />} />
        <Route path="/userPanel/clients" element={<ClientsPage />} />
        <Route
          path="/userPanel/clients/:clientId"
          element={<EditClientPage />}
        />
        <Route path="/userPanel/loanRequests" element={<LoanRequestPage />} />
        <Route
          path="/userPanel/loanRequests/:loanRequestId"
          element={<LoanRequestViewPage />}
        />
        <Route path="/userPanel/loans" element={<LoansPage />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
