import { useParams } from "react-router-dom";
import {
  Suitcase,
  Building,
  Phone,
  MapPin,
  Clock,
  User,
  Cash,
  AlignLeft,
  Edit,
} from "iconoir-react";

import { useForm, useRadioButton } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";

import { WorkDataForm } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/WorkDataInitialValues";
import { validationSchema } from "./ValidationSchema";

import { CustomForm } from "@components/index";

const WorkForm = (): JSX.Element => {
  const params = useParams();
  const clientParam = params as { clientId: string };

  function action() {
    updateClient<WorkDataForm>(clientParam.clientId, formData);
  }

  function fillForm(): WorkDataForm {
    if (client)
      return {
        companyName: client.workingInformation["companyName"],
        phone: client.workingInformation["phone"],
        address: client.workingInformation["address"],
        timeWorking: client.workingInformation["timeWorking"],
        position: client.workingInformation["position"],
        bossName: client.workingInformation["bossName"],
        bossPhone: client.workingInformation["bossName"],
        salary: client.workingInformation["salary"],
        paymentOfPayroll: client.workingInformation["paymentOfPayroll"],
        otherIncome: client.workingInformation["otherIncome"],
        description: client.workingInformation["description"],
      };
    return initialValues;
  }

  const { loading, client, updateClient } = useClientsStore();
  const {
    formData,
    formRef,
    errors,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<WorkDataForm>(
    fillForm(),
    initialErrors,
    validationSchema,
    action
  );
  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
    option3: string;
  }>(
    { option1: "Mensual", option2: "Quincenal", option3: "Semanal" },
    formData.paymentOfPayroll,
    "paymentOfPayroll",
    updateFormData
  );

  return (
    <div className="formContainer">
      <CustomForm
        formTitle="Información laboral"
        Icon={Suitcase}
        formRef={formRef}
        handleSubmit={handleSubmit}
      >
        <CustomForm.FieldSet id="work-info-input-set" setStyle="gridForm">
          <CustomForm.Input
            id="companyName"
            name="companyName"
            label="Empresa donde labora *"
            type="text"
            placeholder="Digita el nombre de la empresa"
            value={formData.companyName}
            errorMessage={errors["companyName"].message}
            Icon={Building}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="phone"
            name="phone"
            label="Teléfono de la empresa *"
            type="phone"
            placeholder="Digita el número de telefono de la empresa"
            value={formData.phone}
            errorMessage={errors["phone"].message}
            Icon={Phone}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="address"
            name="address"
            label="Dirección de la empresa *"
            type="text"
            placeholder="Digita la dirección de la empresa"
            value={formData.address}
            errorMessage={errors["address"].message}
            Icon={MapPin}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="timeWorking"
            name="timeWorking"
            label="Tiempo trabajando en la empresa (En meses) *"
            type="number"
            placeholder="Digita el tiempo trabajando en la empresa"
            value={formData.timeWorking}
            errorMessage={errors["timeWorking"].message}
            Icon={Clock}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="position"
            name="position"
            label="Posición que ocupa"
            type="text"
            placeholder="Digita tu cargo en la empresa"
            value={formData.position}
            errorMessage={errors["position"].message}
            Icon={Suitcase}
            onChange={handleChange}
          />

          <CustomForm.Input
            id="bossName"
            name="bossName"
            label="Nombre de su jefe inmediato *"
            type="text"
            placeholder="Digita el nombre de su jefe "
            value={formData.bossName}
            errorMessage={errors["bossName"].message}
            Icon={User}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="bossPhone"
            name="bossPhone"
            label="Teléfono jefe inmediato *"
            type="phone"
            placeholder="Digita el número de teléfono de su jefe"
            value={formData.bossPhone}
            errorMessage={errors["bossPhone"].message}
            Icon={Phone}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="salary"
            name="salary"
            label="Salarío mensual *"
            type="number"
            placeholder="Digita tu salarío mensual "
            value={formData.salary}
            errorMessage={errors["salary"].message}
            Icon={Cash}
            onChange={handleChange}
          />
          <CustomForm.RadioButtonList
            id="paymentOfPayroll"
            label="El Pago De Su Nomina Es: *"
            errorMessage={errors["paymentOfPayroll"].message}
            radioButtons={[
              {
                id: "option-1",
                name: "paymentOfPayroll",
                value: radioButtonData.option1,
                label: "Mensual",
                onChange: handleRadioChange,
              },
              {
                id: "option-2",
                name: "paymentOfPayroll",
                value: radioButtonData.option2,
                label: "Quincenal",
                onChange: handleRadioChange,
              },
              {
                id: "option-3",
                name: "paymentOfPayroll",
                value: radioButtonData.option3,
                label: "Semanal",
                onChange: handleRadioChange,
              },
            ]}
          />
          <CustomForm.Input
            id="otherIncome"
            name="otherIncome"
            label="Valor otros ingresos *"
            type="number"
            placeholder="Digita el valor de otros ingresos"
            value={formData.otherIncome}
            errorMessage={errors["otherIncome"].message}
            Icon={Cash}
            onChange={handleChange}
          />
          <CustomForm.TextArea
            id="description"
            name="description"
            label="Fuente otros ingresos *"
            placeholder="Describe la fuente de otros ingresos"
            value={formData.description}
            errorMessage={errors["description"].message}
            Icon={AlignLeft}
            onChange={handleChange}
          />
        </CustomForm.FieldSet>
        <CustomForm.IconButton
          id="button-update-work-info"
          type="submit"
          title="Actualizar información"
          Icon={Edit}
          label="Actulalizar información laboral "
          variant="warning"
          loading={loading}
          onClick={() => {}}
        />
      </CustomForm>
    </div>
  );
};

export default WorkForm;
