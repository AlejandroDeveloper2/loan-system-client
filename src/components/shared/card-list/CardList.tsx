import { CardListProps } from "@models/ComponentModels";

import Card from "../card/Card";

import styles from "./CardList.module.css";

const CardList = ({ children }: CardListProps): JSX.Element => {
  return <ul className={styles.cardList}>{children}</ul>;
};

CardList.Card = Card;

export default CardList;
