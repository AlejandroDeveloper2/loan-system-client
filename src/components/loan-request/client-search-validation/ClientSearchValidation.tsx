import { useNavigate } from "react-router-dom";
import { ArrowRight, EmptyPage, PageSearch } from "iconoir-react";

import { ClientSearchValidationProps } from "@models/ComponentModels";

import { ContactInfoList, IconButton } from "@components/index";

import styles from "./ClientSearchValidation.module.css";

const ClientSearchValidation = ({
  clientFounded,
}: ClientSearchValidationProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      {clientFounded ? (
        <PageSearch id="svg-result" />
      ) : (
        <EmptyPage id="svg-result" />
      )}
      <p className="paragraph">
        {clientFounded
          ? "Usted ya se encuentra registrado como Cliente en DOSECOM SEL si quiere" +
            " realizar otra solicitud de préstamo rediríjase personalmente a nuestras" +
            " oficinas. O puede comunicarse a través de nuestro correo electrónico o por teléfono."
          : "Usted no se encuentra registrado como cliente en DOSECOM SEL. Para realizar su primera " +
            "solicitud de préstamo haga clic en el botón de abajo para llenar  los datos correspondientes."}
      </p>
      {clientFounded ? (
        <ContactInfoList />
      ) : (
        <IconButton
          Icon={ArrowRight}
          label="Solicitar préstamo"
          id="btn-request-loan"
          type="button"
          title="Solicitar préstamo"
          variant="primary"
          onClick={() => navigate("/loanRequest/personalData")}
          loading={false}
        />
      )}
    </section>
  );
};

export default ClientSearchValidation;
