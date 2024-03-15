import {
  Calendar,
  Cash,
  Check,
  Eye,
  Settings,
  SwitchOff,
  Triangle,
  User,
  Xmark,
} from "iconoir-react";

import {
  IconButtonProps,
  IconOnlyButtonProps,
  TableHeaderType,
} from "@models/ComponentModels";
import { Columnkey } from "@models/DataModels";

export const headers: TableHeaderType[] = [
  { label: "Solicitante", Icon: User },
  { label: "Fecha de solicitud", Icon: Calendar },
  { label: "Monto solicitado", Icon: Cash },
  { label: "Estado", Icon: SwitchOff },
  { label: "Tipo de préstamo", Icon: Triangle },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "fullName", badgeValue: false, fieldType: "text", subKey: "" },
  { key: "createdAt", badgeValue: false, fieldType: "date", subKey: "" },
  { key: "amount", badgeValue: false, fieldType: "currency", subKey: "" },
  { key: "state", badgeValue: true, fieldType: "text", subKey: "" },
  { key: "paymentCycle", badgeValue: true, fieldType: "text", subKey: "" },
];

export const optionsData: IconOnlyButtonProps[] = [
  {
    Icon: Check,
    id: "btn-approve",
    type: "button",
    title: "Aprobar solicitud de préstamo",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Xmark,
    id: "btn-reject",
    type: "button",
    title: "Rechazar solicitud de préstamo",
    variant: "danger",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Eye,
    id: "btn-view",
    type: "button",
    title: "Ver detalles de la solicitud",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Calendar,
    label: "Mensual",
    id: "Mensual",
    type: "button",
    title: "Filtrar por modalidad mensual",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Quincenal",
    id: "Quincenal",
    type: "button",
    title: "Filtrar por modalidad quincenal",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Semanal",
    id: "Semanal",
    type: "button",
    title: "Filtrar por modalidad semanal",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Todos",
    id: "Todo",
    type: "button",
    title: "Filtrar por todas las modalidades",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];
