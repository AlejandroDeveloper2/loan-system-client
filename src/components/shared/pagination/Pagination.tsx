import { NavArrowLeft, NavArrowRight } from "iconoir-react";

import { PaginationProps } from "@models/ComponentModels";

import { IconOnlyButton } from "@components/index";

import styles from "./Pagination.module.css";

const Pagination = ({ paginationConfig }: PaginationProps): JSX.Element => {
  return (
    <div className={styles.pagination}>
      <IconOnlyButton
        Icon={NavArrowLeft}
        id="btn_pagination"
        type="button"
        title="Pagina anterior"
        variant="primary"
        loading={false}
        onClick={paginationConfig.back}
      />
      <p className="paragraph">
        Mostrando del registro {paginationConfig.firstShownRecord} al{" "}
        {paginationConfig.lastShownRecord} de {paginationConfig.totalRecords}{" "}
        registros
      </p>
      <IconOnlyButton
        Icon={NavArrowRight}
        id="btn_pagination"
        type="button"
        title="Siguiente pagina"
        variant="primary"
        loading={false}
        onClick={paginationConfig.next}
      />
    </div>
  );
};

export default Pagination;
