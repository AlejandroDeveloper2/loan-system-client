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

import useIndicatorsStore from "@zustand/IndicatorsStore";
import { formatMoney } from "@utils/helpers";

import { CardList } from "@components/index";

const UserPanelPage = (): JSX.Element => {
  const { generalIndicators, getGeneralIndicators } = useIndicatorsStore();

  useEffect(() => {
    getGeneralIndicators();
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
          value={String(generalIndicators.totalClients)}
          Icon={Group}
          moreDetailsLink="/userPanel/clients"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total Solicitudes"
          value={String(generalIndicators.totalRequest)}
          Icon={GoogleDocs}
          moreDetailsLink="/userPanel/loanRequests"
          captionText="General"
          variant="neutral"
        />
        <CardList.Card
          title="Total capital invertido"
          value={formatMoney(generalIndicators.totalCapitalInvested)}
          Icon={Coins}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="light"
        />
        <CardList.Card
          title="Total prestamos activos"
          value={String(generalIndicators.totalActiveLoans)}
          Icon={DollarCircle}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total ganancias"
          value={formatMoney(generalIndicators.totalProfits)}
          Icon={Commodity}
          moreDetailsLink="/userPanel/collections"
          captionText="General"
          variant="warning"
        />
        <CardList.Card
          title="Total Prestamos pagados"
          value={String(generalIndicators.totalLoansRepaid)}
          Icon={HandCash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total pagos en mora"
          value={String(generalIndicators.totalLoansInArrears)}
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
