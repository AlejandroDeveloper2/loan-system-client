import { useState } from "react";
import { Hashtag, Search } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import { useLoading } from "@hooks/index";

import {
  ClientSearchValidation,
  IconOnlyButton,
  InputText,
} from "@components/index";

import styles from "./ValidationPage.module.css";

const ValidationPage = (): JSX.Element => {
  const [clientId, setClientId] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);

  const { clientExists, validateClient } = useLoanRequestStore();
  const { loading, toggleLoading } = useLoading();

  if (click) return <ClientSearchValidation clientFounded={clientExists} />;
  return (
    <>
      <p className={styles.description + " " + "paragraph"}>
        Para realizar su solicitud de préstamo primero debe consultar si se
        encuentra registrado en nuestro sistema como cliente.
      </p>
      <div className={styles.searchBox}>
        <InputText
          id="clientId"
          type="text"
          name="clientId"
          label="Número de identificación"
          placeholder="Digite su número de identificación"
          value={clientId}
          errorMessage={""}
          Icon={Hashtag}
          onChange={(e) => setClientId(e.target.value)}
        />
        <IconOnlyButton
          Icon={Search}
          id="button-search"
          type="button"
          title="Consultar cliente"
          variant="primary"
          loading={loading}
          onClick={() => {
            validateClient(clientId, toggleLoading);
            setClick(true);
          }}
        />
      </div>
    </>
  );
};

export default ValidationPage;
