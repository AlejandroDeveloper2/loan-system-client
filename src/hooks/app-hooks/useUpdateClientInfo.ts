import { useState } from "react";

import useClientsStore from "@zustand/ClientsStore";

import { RequestFormData } from "@models/DataModels";
import { StepperFormNameType } from "@models/FormDataModels";

const useUpdateClientInfo = <T>(formKey: StepperFormNameType) => {
  const { updateClient } = useClientsStore();

  const updatedClientInfo = window.localStorage.getItem("updatedClientInfo");
  const updatedClientInfoLS: RequestFormData = updatedClientInfo
    ? window.JSON.parse(updatedClientInfo)
    : null;

  const [clientInfo, setClientInfo] = useState<RequestFormData>(
    () => updatedClientInfoLS
  );

  const saveDataToLocalstorage = (formData: T): void => {
    const updatedClientData: RequestFormData = {
      ...clientInfo,
      [formKey]: { ...formData },
    };

    window.localStorage.setItem(
      "updatedClientInfo",
      window.JSON.stringify(updatedClientData)
    );
    setClientInfo(updatedClientData);
  };

  const updateClientData = (): void => {
    console.log(clientInfo);
    updateClient("", clientInfo);
  };

  return {
    clientInfo,
    saveDataToLocalstorage,
    updateClientData,
  };
};

export default useUpdateClientInfo;
