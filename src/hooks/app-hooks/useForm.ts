import { ChangeEvent, FormEvent, useState, useRef } from "react";

import { WrongInput } from "@models/FormDataModels";

const useForm = <T>(
  initialValues: T,
  initialErrors: WrongInput,
  validationSchema: (
    formData: T,
    formRef: React.RefObject<HTMLFormElement>
  ) => Promise<WrongInput>,
  action: () => void
) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<WrongInput>(initialErrors);
  const formRef = useRef<HTMLFormElement>(null);

  const updateErrors = (updatedErrors: WrongInput): void => {
    setErrors(updatedErrors);
  };

  const updateFormData = (fieldValue: string | number, key: string): void => {
    setFormData({ ...formData, [key]: fieldValue });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const wrongInput = await validationSchema(formData, formRef);
    updateErrors(wrongInput);

    if (Object.values(wrongInput).every((error) => !error.error)) {
      action();
      clearForm();
      return;
    }
  };

  const clearForm = (): void => {
    setFormData(initialValues);
    setErrors(initialErrors);
  };

  return {
    formData,
    errors,
    formRef,
    updateFormData,
    handleChange,
    handleSubmit,
    clearForm,
  };
};
export default useForm;
