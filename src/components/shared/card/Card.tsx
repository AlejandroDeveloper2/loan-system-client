import { useNavigate } from "react-router-dom";
import { Eye } from "iconoir-react";

import { CardProps } from "@models/ComponentModels";

import { IconButton } from "@components/index";

import styles from "./Card.module.css";

const Card = (props: CardProps): JSX.Element => {
  const { title, value, moreDetailsLink, variant, captionText, Icon } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer + " " + styles[variant]}>
      <figure className={styles.cardContent}>
        <Icon />
        <h2 className="buttonText">{title}</h2>
      </figure>
      <span className="heading1" id="card-text">
        {value}
      </span>
      <small className="captionText">{captionText}</small>
      {moreDetailsLink ? (
        <IconButton
          Icon={Eye}
          label="Ver más detalles"
          id="btn-more-details"
          type="button"
          title="Ver más detalles"
          variant="neutral"
          loading={false}
          onClick={() => navigate(moreDetailsLink)}
        />
      ) : null}
    </div>
  );
};

export default Card;
