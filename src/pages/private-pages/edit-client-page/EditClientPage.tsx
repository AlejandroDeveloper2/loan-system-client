import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Group } from "iconoir-react";

import useClientsStore from "@zustand/ClientsStore";

import {
  BankAccountForm,
  InfoSection,
  PersonalForm,
  WorkForm,
} from "@components/index";

const EditClientPage = (): JSX.Element => {
  const params = useParams();
  const client = params as { clientId: string };
  const { getClient } = useClientsStore();

  useEffect(() => {
    getClient(client.clientId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  return (
    <>
      <h1 className="heading1">
        <Group />
        Actualizar datos del cliente
      </h1>
      <InfoSection
        sectionTitle="Datos del cliente"
        labelId="id del cliente"
        link="/userPanel/clients"
        recordId={client.clientId}
      />

      <PersonalForm />
      <WorkForm />
      <BankAccountForm />
    </>
  );
};

export default EditClientPage;
