import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormStepData, RequestFormData } from "@models/DataModels";
import { StepperFormNameType } from "@models/FormDataModels";

import useLoanRequestStore from "@zustand/LoanRequestStore";

const useFormStepper = <T>(nextStep: string, formKey: StepperFormNameType) => {
  const navigate = useNavigate();
  const stepData = window.localStorage.getItem("stepFormData");
  const { createLoanRequest } = useLoanRequestStore();

  const stepDataLS: FormStepData<T> = stepData
    ? window.JSON.parse(stepData)
    : { stepName: "/loanRequest/personalData", stepFormData: null };

  const [currentStepData, setCurrentStepData] = useState<FormStepData<T>>(
    () => stepDataLS
  );

  const saveStepFormData = (formData: T): void => {
    const updatedStepData: FormStepData<T> = {
      stepName: nextStep,
      formData: { ...currentStepData.formData, [formKey]: { ...formData } },
    };

    window.localStorage.setItem(
      "stepFormData",
      window.JSON.stringify(updatedStepData)
    );
    setCurrentStepData(updatedStepData);
    if (formKey === "personalReference") {
      const parsedCurrentStepData: RequestFormData =
        currentStepData.formData as RequestFormData;
      createLoanRequest(parsedCurrentStepData);
      window.localStorage.clear();
    } else navigate(nextStep);
  };

  return {
    currentStepData,
    saveStepFormData,
  };
};
export default useFormStepper;
