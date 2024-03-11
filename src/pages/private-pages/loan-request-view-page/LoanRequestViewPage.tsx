import { useEffect } from "react";
import { GoogleDocs } from "iconoir-react";
import { useParams } from "react-router-dom";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import {
  BankDataSection,
  InfoSection,
  LoanDataSection,
  PersonalDataSection,
  ReferencesDataSection,
  WorkDataSection,
} from "@components/index";

const LoanRequestViewPage = (): JSX.Element => {
  const params = useParams();
  const request = params as { loanRequestId: string };

  const { getLoanRequest } = useLoanRequestStore();

  useEffect(() => {
    getLoanRequest(request.loanRequestId);
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
      <PersonalDataSection />
      <WorkDataSection />
      <LoanDataSection />
      <BankDataSection />
      <ReferencesDataSection />
    </>
  );
};

export default LoanRequestViewPage;
