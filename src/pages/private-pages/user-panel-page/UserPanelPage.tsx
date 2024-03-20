/* eslint-disable react-hooks/exhaustive-deps */
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
import { useLoading } from "@hooks/index";

import { CardList } from "@components/index";

const UserPanelPage = (): JSX.Element => {
  const { generalIndicators, getGeneralIndicators } = useIndicatorsStore();
  const { loading, toggleLoading } = useLoading();

  useEffect(() => {
    getGeneralIndicators(toggleLoading);
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
          loading={loading}
        />
        <CardList.Card
          title="Total Solicitudes"
          value={String(generalIndicators.totalRequest)}
          Icon={GoogleDocs}
          moreDetailsLink="/userPanel/loanRequests"
          captionText="General"
          variant="neutral"
          loading={loading}
        />
        <CardList.Card
          title="Total capital invertido"
          value={formatMoney(generalIndicators.totalCapitalInvested)}
          Icon={Coins}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="light"
          loading={loading}
        />
        <CardList.Card
          title="Total prestamos activos"
          value={String(generalIndicators.totalActiveLoans)}
          Icon={DollarCircle}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
          loading={loading}
        />
        <CardList.Card
          title="Total ganancias"
          value={formatMoney(generalIndicators.totalProfits)}
          Icon={Commodity}
          moreDetailsLink="/userPanel/collections"
          captionText="General"
          variant="warning"
          loading={loading}
        />
        <CardList.Card
          title="Total Prestamos pagados"
          value={String(generalIndicators.totalLoansRepaid)}
          Icon={HandCash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
          loading={loading}
        />
        <CardList.Card
          title="Total pagos en mora"
          value={String(generalIndicators.totalLoansInArrears)}
          Icon={Cash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="danger"
          loading={loading}
        />
      </CardList>
    </>
  );
};

export default UserPanelPage;
