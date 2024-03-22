import {
  Calendar,
  Cash,
  Download,
  Hashtag,
  Settings,
  SwitchOff,
} from "iconoir-react";

import { IconOnlyButtonProps, TableHeaderType } from "@models/ComponentModels";
import { Columnkey } from "@models/DataModels";

export const headers: TableHeaderType[] = [
  { label: "N° de cuota", Icon: Hashtag },
  { label: "Fecha de pago de cuota", Icon: Calendar },
  { label: "Monto de cuota", Icon: Cash },
  { label: "Estado del pago", Icon: SwitchOff },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "quotaNumber", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "paymentDate", badgeValue: false, fieldType: "date", subKeys: [] },
  { key: "amount", badgeValue: false, fieldType: "currency", subKeys: [] },
  { key: "paymentStatus", badgeValue: true, fieldType: "text", subKeys: [] },
];

export const optionsData: IconOnlyButtonProps[] = [
  {
    Icon: Cash,
    id: "btn-pay",
    type: "button",
    title: "Pagar cuota",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Download,
    id: "btn-download-ticket",
    type: "button",
    title: "Descargar ticket",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];
