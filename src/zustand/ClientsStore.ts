import { create } from "zustand";

import { ClientStore } from "@models/StoreModels";
import {
  Client,
  ResponseGlobal,
  ServerResponse,
  TableResponse,
} from "@models/DataModels";

import { ClientsService } from "@services/Clients.service";
import { toast } from "react-toastify";
import { ClientsFilters } from "@models/FiltersDataModels";
import { UpdateClientDataForm } from "@models/FormDataModels";
import { parseUpdatedClientInfo } from "@utils/helpers";

const clientsService = new ClientsService();

const useClientsStore = create<ClientStore>((set) => ({
  clients: [],
  client: null,
  paginationData: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
    limit: "",
  },
  getAllClients: async (
    limit: string,
    page: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando clientes...", true);
      const { body: clients, pagination }: TableResponse<Client> =
        await clientsService.getAllClients(
          token,
          page,
          limit,
          searchValue,
          clientFilters,
          filter
        );
      set({ clients, paginationData: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los clientes!");
    } finally {
      toggleLoading("", false);
    }
  },
  getClient: async (
    clientId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando cliente...", true);
      const { body: client }: ResponseGlobal<Client> =
        await clientsService.getClient(token, clientId);
      set({ client });
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      console.log(parsedError);
      toast.error("¡Ha ocurrido un error al obtener el cliente!");
    } finally {
      toggleLoading("", false);
    }
  },
  updateClient: async (
    clientId: string,
    updatedClientData: UpdateClientDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    const parsedClientData: Client = parseUpdatedClientInfo(
      clientId,
      updatedClientData
    );

    try {
      toggleLoading("Actualizando información...", true);
      const updatedClient: Client = await clientsService.updateClient(
        token,
        clientId,
        parsedClientData
      );
      set(({ clients }) => ({
        clients: clients.map((client) => {
          if (client.id === clientId) return updatedClient;
          return client;
        }),
      }));
      set(({ clients }) => ({
        client: clients.filter((client) => client.id === clientId)[0],
      }));
      toast.success("¡El cliente ha sido actualizado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al actualizar el cliente!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useClientsStore;
