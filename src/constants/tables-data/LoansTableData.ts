import {
  Calendar,
  Cash,
  Coins,
  Edit,
  Settings,
  Star,
  SwitchOff,
  Trash,
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
  { label: "Fecha de creación", Icon: Calendar },
  { label: "Cliente", Icon: User },
  { label: "Monto original", Icon: Cash },
  { label: "Monto + interes", Icon: Cash },
  { label: "Estado", Icon: SwitchOff },
  { label: "Ciclo de pago", Icon: Triangle },
  { label: "N° cuotas pagadas", Icon: Coins },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  {
    key: "createdAt",
    badgeValue: false,
    fieldType: "date",
    subKeys: [],
  },
  {
    key: "client",
    badgeValue: false,
    fieldType: "subField",
    subKeys: ["fullName"],
  },

  { key: "amount", badgeValue: false, fieldType: "currency", subKeys: [] },
  {
    key: "amountInterest",
    badgeValue: false,
    fieldType: "currency",
    subKeys: [],
  },
  { key: "loanState", badgeValue: true, fieldType: "text", subKeys: [] },
  { key: "paymentCycle", badgeValue: true, fieldType: "text", subKeys: [] },
  {
    key: "numberOfPayments",
    badgeValue: false,
    fieldType: "text",
    subKeys: [],
  },
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
  {
    Icon: Trash,
    id: "btn-delete-loan",
    type: "button",
    title: "Eliminar préstamo",
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
