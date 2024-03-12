import {
  AtSign,
  Calendar,
  Edit,
  Filter,
  Hashtag,
  Phone,
  Settings,
  User,
} from "iconoir-react";

import {
  IconButtonProps,
  IconOnlyButtonProps,
  TableHeaderType,
} from "@models/ComponentModels";
import { Columnkey } from "@models/DataModels";

export const headers: TableHeaderType[] = [
  { label: "Fecha de creación", Icon: Calendar },
  { label: "Nombres", Icon: User },
  { label: "Número de documento", Icon: Hashtag },
  { label: "Correo electrónico", Icon: AtSign },
  { label: "Número de teléfono", Icon: Phone },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "createdAt", badgeValue: false, fieldType: "date" },
  { key: "fullName", badgeValue: false, fieldType: "text" },
  { key: "identification", badgeValue: false, fieldType: "text" },
  { key: "email", badgeValue: false, fieldType: "text" },
  { key: "phone", badgeValue: false, fieldType: "text" },
];

export const optionsData: IconOnlyButtonProps[] = [
  {
    Icon: Edit,
    id: "btn-edit",
    type: "button",
    title: "Editar información de cliente",
    variant: "warning",
    loading: false,
    onClick: () => console.log(""),
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Filter,
    label: "Ordenar por más reciente",
    id: "ASC",
    type: "button",
    title: "ordenar por orden de creación",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Filter,
    label: "Ordenar por más antiguo",
    id: "DESC",
    type: "button",
    title: "Ordenar por orden de creación",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
];
