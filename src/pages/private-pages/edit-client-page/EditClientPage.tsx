import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Group } from "iconoir-react";

import useClientsStore from "@zustand/ClientsStore";
import { useLoading } from "@hooks/index";

import { InfoSection, Spinner, UpdateClientForm } from "@components/index";

const EditClientPage = (): JSX.Element => {
  const params = useParams();
  const clientParam = params as { clientId: string };
  const { getClient } = useClientsStore();

  const { loading, loadingMessage, toggleLoading } = useLoading();

  useEffect(() => {
    getClient(clientParam.clientId, toggleLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientParam]);

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
        recordId={clientParam.clientId}
      />
      {loading ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <UpdateClientForm />
      )}
    </>
  );
};

export default EditClientPage;
