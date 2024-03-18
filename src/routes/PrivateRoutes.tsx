import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@layout/index";

import {
  ClientsPage,
  UserPanelPage,
  LoanRequestPage,
  EditClientPage,
  LoansPage,
  LoanRequestViewPage,
  ApproveLoanPage,
  UserProfilePage,
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
        <Route path="/userPanel/loans/:loanId" element={<ApproveLoanPage />} />
        <Route path="/userPanel/userProfile" element={<UserProfilePage />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
