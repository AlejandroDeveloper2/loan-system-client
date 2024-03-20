import {
  Cash,
  CoinsSwap,
  GoogleDocs,
  Group,
  Settings,
  ViewGrid,
} from "iconoir-react";

import { NavItem } from "@models/DataModels";

export const navItems: NavItem[] = [
  { Icon: ViewGrid, title: "Panel de control", to: "/userPanel" },
  { Icon: Group, title: "Clientes", to: "/userPanel/clients" },
  { Icon: GoogleDocs, title: "Solicitudes", to: "/userPanel/loanRequests" },
  { Icon: Cash, title: "Préstamos", to: "/userPanel/loans" },
  { Icon: CoinsSwap, title: "Pagos", to: "/userPanel/payments" },
  {
    Icon: Settings,
    title: "Configuración Perfil",
    to: "/userPanel/userProfile",
  },
];
