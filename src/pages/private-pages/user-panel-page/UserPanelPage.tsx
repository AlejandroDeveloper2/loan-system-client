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

import { CardList } from "@components/index";

const UserPanelPage = (): JSX.Element => {
  return (
    <>
      <h1 className="heading1">
        <ViewGrid />
        Panel de control
      </h1>
      <CardList>
        <CardList.Card
          title="Total Clientes"
          value="0"
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
          value="$0"
          Icon={Coins}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="light"
        />
        <CardList.Card
          title="Total prestamos activos"
          value="0"
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
          value="0"
          Icon={HandCash}
          moreDetailsLink="/userPanel/loans"
          captionText="General"
          variant="primary"
        />
        <CardList.Card
          title="Total prestamos en mora"
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
