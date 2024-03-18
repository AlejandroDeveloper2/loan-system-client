import { useEffect } from "react";
import {
  Cash,
  Coins,
  Commodity,
  DollarCircle,
  GoogleDocs,
  Group,
  HandCash,
  ViewGrid,
} from "iconoir-react";

import useClientsStore from "@zustand/ClientsStore";
import useLoansStore from "@zustand/LoansStore";
import { formatMoney } from "@utils/helpers";

import { CardList } from "@components/index";

const UserPanelPage = (): JSX.Element => {
  const { loanIndicators, getLoanIndicators } = useLoansStore();
  const { clients, getAllClients } = useClientsStore();

  useEffect(() => {
    getAllClients("", "", "", { initialDate: "", finalDate: "" }, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLoanIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="heading1">
        <ViewGrid />
        Panel de control
      </h1>
      <CardList>
        <CardList.Card
          title="Total Clientes"
          value={String(clients.length)}
          Icon={Group}
          moreDetailsLink="/userPanel/clients"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Solicitudes nuevas"
          value="0"
          Icon={GoogleDocs}
          moreDetailsLink="/userPanel/loanRequests"
          captionText="Hoy"
          variant="neutral"
        />
        <CardList.Card
          title="Total capital invertido"
          value={formatMoney(loanIndicators.totalInvestedCapital)}
          Icon={Coins}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="light"
        />
        <CardList.Card
          title="Total prestamos activos"
          value={String(loanIndicators.totalActiveLoans)}
          Icon={DollarCircle}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total ganancias"
          value="$0"
          Icon={Commodity}
          moreDetailsLink="/userPanel/collections"
          captionText="Hoy"
          variant="warning"
        />
        <CardList.Card
          title="Total Prestamos pagados"
          value={String(loanIndicators.totalLoansPaid)}
          Icon={HandCash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total pagos en mora"
          value="0"
          Icon={Cash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="danger"
        />
      </CardList>
    </>
  );
};

export default UserPanelPage;
