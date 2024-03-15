import {
  Cash,
  Coins,
  Edit,
  Hashtag,
  Settings,
  Star,
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
  { label: "Cliente", Icon: User },
  { label: "Monto original", Icon: Cash },
  { label: "Monto + interes", Icon: Cash },
  { label: "Estado", Icon: SwitchOff },
  { label: "Ciclo de pago", Icon: Triangle },
  { label: "N° cuotas pagadas", Icon: Coins },
  { label: "N° de cuotas", Icon: Hashtag },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  {
    key: "client",
    badgeValue: false,
    fieldType: "subField",
    subKey: "fullName",
  },
  { key: "amount", badgeValue: false, fieldType: "currency", subKey: "" },
  {
    key: "amountInterest",
    badgeValue: false,
    fieldType: "currency",
    subKey: "",
  },
  { key: "loanState", badgeValue: true, fieldType: "text", subKey: "" },
  { key: "paymentCycle", badgeValue: true, fieldType: "text", subKey: "" },
  {
    key: "numberOfPayments",
    badgeValue: false,
    fieldType: "text",
    subKey: "",
  },
  { key: "deadline", badgeValue: false, fieldType: "text", subKey: "" },
];

export const optionsData: IconOnlyButtonProps[] = [
  {
    Icon: Edit,
    id: "btn-edit-loan",
    type: "button",
    title: "Editar préstamo",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Xmark,
    id: "btn-cancel-loan",
    type: "button",
    title: "Cancelar préstamo",
    variant: "danger",
    loading: false,
    onClick: () => console.log(""),
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Star,
    label: "Pendiente",
    id: "Pendiente",
    type: "button",
    title: "Filtrar por préstamos pendientes",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Pagado",
    id: "Pagado",
    type: "button",
    title: "Filtrar por préstamos pagados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Cancelado",
    id: "Cancelado",
    type: "button",
    title: "Filtrar por préstamos cancelados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Aprobado",
    id: "Aprobado",
    type: "button",
    title: "Filtrar por préstamos aprobados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Todos",
    id: "Todos",
    type: "button",
    title: "Filtrar por todos los estados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];
