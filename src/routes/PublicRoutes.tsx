import { Route, Routes } from "react-router-dom";

import { PublicLayout } from "@layout/index";
import {
  BankAccountDataPage,
  ChangePasswordPage,
  LoanDataPage,
  LoginPage,
  PersonalDataPage,
  PersonalReferencesPage,
  RecoverPasswordPage,
  ValidationPage,
  WorkDataPage,
} from "@pages/index";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      {/* Rutas publicas  */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/recoverPassword" element={<RecoverPasswordPage />} />
        <Route path="/changePassword/:token" element={<ChangePasswordPage />} />
      </Route>

      {/* Rutas solicitud de prestamo */}
      <Route path="/loanRequest" element={<PublicLayout />}>
        <Route index element={<ValidationPage />} />
        <Route
          path="/loanRequest/personalData"
          element={<PersonalDataPage />}
        />
        <Route path="/loanRequest/workData" element={<WorkDataPage />} />
        <Route path="/loanRequest/loanData" element={<LoanDataPage />} />
        <Route
          path="/loanRequest/bankAccountData"
          element={<BankAccountDataPage />}
        />
        <Route
          path="/loanRequest/personalReferences"
          element={<PersonalReferencesPage />}
        />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
