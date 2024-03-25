import { Attachment, Copy } from "iconoir-react";

import { copyToClipboard } from "@utils/helpers";

import { IconOnlyButton } from "@components/index";

import styles from "./InviteLinkSection.module.css";

const InviteLinkSection = (): JSX.Element => {
  const requestLink: string = "https://www.cashmoneyrd.com/loanRequest";

  return (
    <section className={styles.linkSection}>
      <h3 className="heading3">Solicitudes de préstamos</h3>
      <div className={styles.linkSectionBody}>
        <p className="paragraph">
          <Attachment />
          Link para realizar solicitudes:
          <span className="paragraph">{" " + requestLink}</span>
        </p>
        <IconOnlyButton
          Icon={Copy}
          id="btn-copy"
          type="button"
          title="Copiar link"
          variant="primary"
          loading={false}
          onClick={() =>
            copyToClipboard(
              requestLink,
              "Link de solicitud copiado al porta papeles!"
            )
          }
        />
      </div>
    </section>
  );
};

export default InviteLinkSection;
