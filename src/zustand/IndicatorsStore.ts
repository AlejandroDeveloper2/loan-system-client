import { create } from "zustand";
import { toast } from "react-toastify";

import { IndicatorsStore } from "@models/StoreModels";
import { GeneralIndicators, ResponseGlobal } from "@models/DataModels";

import { IndicatorsService } from "@services/Indicators.service";

const indicatorsService = new IndicatorsService();

const useIndicatorsStore = create<IndicatorsStore>((set) => ({
  generalIndicators: {
    totalClients: 0,
    totalRequest: 0,
    totalCapitalInvested: 0,
    totalActiveLoans: 0,
    totalProfits: 0,
    totalLoansRepaid: 0,
    totalLoansInArrears: 0,
  },
  getGeneralIndicators: async (): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { body: generalIndicators }: ResponseGlobal<GeneralIndicators> =
        await indicatorsService.getGeneralIndicators(token);
      set({ generalIndicators });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al obtener los indicadores generales!"
      );
    }
  },
}));

export default useIndicatorsStore;
