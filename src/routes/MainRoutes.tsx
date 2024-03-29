import { Navigate, Route, Routes } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

import useAuthStore from "@zustand/AuthStore";

import { LoadingWindow } from "@components/index";

const MainRoutes = (): JSX.Element => {
  const { authStatus } = useAuthStore();

  if (authStatus === "checking") return <LoadingWindow />;
  return (
    <Routes>
      {authStatus === "authenticated" ? (
        <>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path="/" element={<Navigate to="/userPanel" />} />
          <Route path="/loanRequest/*" element={<Navigate to="/userPanel" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/userPanel/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default MainRoutes;
