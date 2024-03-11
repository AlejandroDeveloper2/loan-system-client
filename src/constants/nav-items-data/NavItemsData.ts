import {
  Cash,
  CoinsSwap,
  GoogleDocs,
  Group,
  HandCash,
  ViewGrid,
} from "iconoir-react";

import { NavItem } from "@models/DataModels";

export const navItems: NavItem[] = [
  { Icon: ViewGrid, title: "Panel de control", to: "/userPanel" },
  { Icon: Group, title: "Clientes", to: "/userPanel/clients" },
  { Icon: GoogleDocs, title: "Solicitudes", to: "/userPanel/loanRequests" },
  { Icon: Cash, title: "Préstamos", to: "/userPanel/loans" },
  { Icon: HandCash, title: "Cobros", to: "/userPanel/collections" },
  { Icon: CoinsSwap, title: "Pagos", to: "/userPanel/payments" },
];
