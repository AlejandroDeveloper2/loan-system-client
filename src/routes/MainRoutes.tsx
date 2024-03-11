import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

import useAuthStore from "@zustand/AuthStore";

const MainRoutes = (): JSX.Element => {
  const { auth, authStatus, verifyAuthenticatedUser } = useAuthStore();

  useEffect(() => {
    verifyAuthenticatedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  if (authStatus === "checking") return <>Cargando...</>;
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
