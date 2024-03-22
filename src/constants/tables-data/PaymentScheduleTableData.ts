import { Calendar, Hashtag, Cash } from "iconoir-react";

import { TableHeaderType } from "@models/ComponentModels";
import { Columnkey } from "@models/DataModels";

export const headers: TableHeaderType[] = [
  { label: "N° de cuota", Icon: Hashtag },
  { label: "Fecha de pago", Icon: Calendar },
  { label: "Monto cuota", Icon: Cash },
];

export const columnKeys: Columnkey[] = [
  {
    key: "quotaNumber",
    badgeValue: false,
    fieldType: "text",
    subKeys: [],
  },
  { key: "paymentDate", badgeValue: false, fieldType: "date", subKeys: [] },
  {
    key: "amount",
    badgeValue: false,
    fieldType: "currency",
    subKeys: [],
  },
];
