import { Check, WarningCircle, Xmark } from "iconoir-react";

import { DialogProps } from "@models/ComponentModels";

import { useLoading } from "@hooks/index";

import { IconButton } from "@components/index";

import styles from "./Dialog.module.css";

const Dialog = (props: DialogProps): JSX.Element => {
  const {
    dialogMessage,
    acceptButtonLabel,
    elementId,
    toggleDialog,
    action,
    open,
  } = props;

  const { loading, toggleLoading } = useLoading();

  return (
    <div className={open ? styles.visible : styles.invisible}>
      <dialog className={styles.dialog}>
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
              }}
            />
            <IconButton
              Icon={Check}
              label={acceptButtonLabel}
              id="btn-accept"
              type="button"
              title="Aceptar operación"
              variant="primary"
              loading={loading}
              onClick={() => {
                action(elementId, toggleLoading).then(() => {
                  toggleDialog();
                });
              }}
            />
          </menu>
        </section>
      </dialog>
    </div>
  );
};

export default Dialog;
