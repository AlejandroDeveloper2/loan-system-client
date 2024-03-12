import { useState, useEffect } from "react";
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
    : { stepName: "/loanRequest/personalData", formData: {} };

  const [currentStepData, setCurrentStepData] = useState<FormStepData<T>>(
    () => stepDataLS
  );

  useEffect(() => {
    if (Object.keys(currentStepData.formData).length === 5) {
      console.log(currentStepData.formData);
      const parsedCurrentStepData: RequestFormData =
        currentStepData.formData as RequestFormData;
      createLoanRequest(parsedCurrentStepData);
      console.log(parsedCurrentStepData);
      navigate("/loanRequest");
      window.localStorage.clear();
      setCurrentStepData({
        stepName: "/loanRequest/personalData",
        formData: {},
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStepData.formData]);

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
    if (formKey !== "personalReference") {
      navigate(nextStep);
    }
  };

  return {
    currentStepData,
    saveStepFormData,
  };
};
export default useFormStepper;
