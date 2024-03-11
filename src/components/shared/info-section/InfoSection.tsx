import { ArrowLeft, Hashtag } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import { InfoSectionProps } from "@models/ComponentModels";

import { IconButton } from "@components/index";

import styles from "./InfoSection.module.css";

const InfoSection = (props: InfoSectionProps): JSX.Element => {
  const { sectionTitle, labelId, link, recordId } = props;

  const navigate = useNavigate();

  return (
    <section className={styles.infoSection}>
      <div className={styles.sectionHead}>
        <h3 className="heading3">{sectionTitle}</h3>
        <IconButton
          Icon={ArrowLeft}
          label="Volver al listado"
          id="btn-back-to-list"
          type="button"
          title="Volver al listado"
          variant="primary"
          loading={false}
          onClick={() => navigate(link)}
        />
      </div>
      <p>
        <Hashtag /> <span>{labelId}: </span> {recordId}{" "}
      </p>
    </section>
  );
};

export default InfoSection;
