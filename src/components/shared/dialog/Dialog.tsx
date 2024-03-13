import { Check, WarningCircle, Xmark } from "iconoir-react";

import { DialogProps } from "@models/ComponentModels";

import { IconButton } from "@components/index";

import styles from "./Dialog.module.css";

const Dialog = (props: DialogProps): JSX.Element => {
  const {
    dialogMessage,
    acceptButtonLabel,
    toggleDialog,
    toggleChosenOption,
    open,
  } = props;

  return (
    <dialog className={open ? styles.visible : styles.invisible}>
      <h2 className="heading2">
        {" "}
        <WarningCircle /> Advertencia
      </h2>
      <section className={styles.dialogBody}>
        <p className="paragraph">{dialogMessage}</p>
        <menu className={styles.dialogOptions}>
          <IconButton
            Icon={Xmark}
            label="Cancelar"
            id="btn-cancel"
            type="button"
            title="Cancelar operación"
            variant="neutral"
            loading={false}
            onClick={() => {
              toggleDialog();
              toggleChosenOption("Not");
            }}
          />
          <IconButton
            Icon={Check}
            label={acceptButtonLabel}
            id="btn-accept"
            type="button"
            title="Aceptar operación"
            variant="primary"
            loading={false}
            onClick={() => {
              toggleDialog();
              toggleChosenOption("Yes");
            }}
          />
        </menu>
      </section>
    </dialog>
  );
};

export default Dialog;
