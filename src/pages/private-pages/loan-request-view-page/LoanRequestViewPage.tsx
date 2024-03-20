import { useEffect } from "react";
import { GoogleDocs } from "iconoir-react";
import { useParams } from "react-router-dom";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import { useLoading } from "@hooks/index";

import {
  BankDataSection,
  InfoSection,
  LoanDataSection,
  PersonalDataSection,
  ReferencesDataSection,
  Spinner,
  WorkDataSection,
} from "@components/index";

const LoanRequestViewPage = (): JSX.Element => {
  const params = useParams();
  const request = params as { loanRequestId: string };

  const { getLoanRequest } = useLoanRequestStore();
  const { loading, loadingMessage, toggleLoading } = useLoading();

  useEffect(() => {
    getLoanRequest(request.loanRequestId, toggleLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  return (
    <>
      <h1 className="heading1">
        <GoogleDocs />
        Detalle de solicitud
      </h1>
      <InfoSection
        sectionTitle="Detalles de la solicitud"
        labelId="id de solicitud"
        link="/userPanel/loanRequests"
        recordId={request.loanRequestId}
      />
      {loading ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <>
          <PersonalDataSection />
          <WorkDataSection />
          <LoanDataSection />
          <BankDataSection />
          <ReferencesDataSection />
        </>
      )}
    </>
  );
};

export default LoanRequestViewPage;
