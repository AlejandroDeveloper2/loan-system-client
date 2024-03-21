import {
  Calendar,
  Cash,
  Eye,
  Hashtag,
  Settings,
  Star,
  SwitchOff,
  Triangle,
  User,
} from "iconoir-react";

import {
  IconButtonProps,
  IconOnlyButtonProps,
  TableHeaderType,
} from "@models/ComponentModels";
import { Columnkey } from "@models/DataModels";

export const headers: TableHeaderType[] = [
  { label: "Cliente", Icon: User },
  { label: "Cédula", Icon: Hashtag },
  { label: "N° de cuota", Icon: Hashtag },
  { label: "Monto cuota", Icon: Cash },
  { label: "Estado", Icon: SwitchOff },
  { label: "Ciclo de pago", Icon: Triangle },
  { label: "Fecha de pago", Icon: Calendar },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  {
    key: "client",
    badgeValue: false,
    fieldType: "subField",
    subKey: "fullName",
  },
  {
    key: "client",
    badgeValue: false,
    fieldType: "subField",
    subKey: "identification",
  },
  { key: "quotaNumber", badgeValue: false, fieldType: "text", subKey: "" },
  {
    key: "amount",
    badgeValue: false,
    fieldType: "currency",
    subKey: "",
  },
  { key: "paymentStatus", badgeValue: true, fieldType: "text", subKey: "" },
  { key: "paymentCycle", badgeValue: true, fieldType: "text", subKey: "" },
  {
    key: "paymentDate",
    badgeValue: false,
    fieldType: "date",
    subKey: "",
  },
];

export const optionsData: IconOnlyButtonProps[] = [
  {
    Icon: Eye,
    id: "btn-view-payment",
    type: "button",
    title: "Ver detalle del pago",
    variant: "primary",
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
    title: "Filtrar por pagos pendientes",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Pagado",
    id: "Pagado",
    type: "button",
    title: "Filtrar por pagos realizados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "Cancelado",
    id: "Cancelado",
    type: "button",
    title: "Filtrar por pagos cancelados",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Star,
    label: "En mora",
    id: "Mora",
    type: "button",
    title: "Filtrar por pagos en mora",
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
