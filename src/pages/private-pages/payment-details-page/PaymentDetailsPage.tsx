/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AtSign,
  Calendar,
  Cash,
  CoinsSwap,
  Hashtag,
  Percentage,
  Phone,
  RefreshDouble,
  Suitcase,
  User,
} from "iconoir-react";

import { PaymentsData } from "@models/DataModels";
import { paymentInitialValues } from "@constants/payment-initial-values/PaymentInitialValues";

import usePaymentStore from "@zustand/PaymentStore";
import { useLoading } from "@hooks/index";
import { formatDate, formatMoney } from "@utils/helpers";

import { InfoCard, InfoSection, QuotaInfo, Spinner } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const PaymentDetailsPage = (): JSX.Element => {
  const params = useParams();
  const paymentParam = params as { paymentId: string };

  const { loading, loadingMessage, toggleLoading } = useLoading();

  const { payment, getPayment } = usePaymentStore();

  useEffect(() => {
    getPayment(paymentParam.paymentId, toggleLoading);
  }, [paymentParam]);

  const fillData = (): PaymentsData => {
    if (payment)
      return {
        id: payment.id,
        paymentDate: payment.paymentDate,
        amount: payment.amount,
        quotaNumber: payment.quotaNumber,
        paymentCycle: payment.paymentCycle,
        paymentStatus: payment.paymentStatus,
        loan: payment.loan,
      };
    return paymentInitialValues;
  };

  return (
    <>
      <h1 className="heading1">
        <CoinsSwap />
        Realizar pago
      </h1>
      <InfoSection
        sectionTitle="Detalles del pago"
        labelId="Id del pago"
        link="/userPanel/payments"
        recordId={paymentParam.paymentId}
      />
      {loading ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <>
          <div className="formContainer">
            <form id="read-only-personal-form" className={styles.form}>
              <h2 className="heading2"> Datos básicos del préstamo</h2>
              <fieldset className={styles.fieldset}>
                <InfoCard
                  Icon={Cash}
                  label="Monto Solicitado"
                  value={formatMoney(fillData().loan.amount)}
                />
                <InfoCard
                  Icon={RefreshDouble}
                  label="Ciclo de pago"
                  value={fillData().paymentCycle}
                />
                <InfoCard
                  Icon={Percentage}
                  label="Tasa de interes"
                  value={fillData().loan.interest + "%"}
                />
                <InfoCard
                  Icon={Hashtag}
                  label="Cantidad de pagos"
                  value={fillData().loan.numberOfPayments}
                />
                <InfoCard
                  Icon={Calendar}
                  label="Fecha de primer pago"
                  value={formatDate(fillData().loan.firstPaymentDate)}
                />
              </fieldset>
            </form>
          </div>
          <div className="formContainer">
            <form id="read-only-personal-form" className={styles.form}>
              <h2 className="heading2"> Datos básicos del cliente</h2>
              <fieldset className={styles.fieldset}>
                <InfoCard
                  Icon={User}
                  label="Nombres"
                  value={fillData().loan.client.fullName}
                />
                <InfoCard
                  Icon={Hashtag}
                  label="número de documento"
                  value={fillData().loan.client.identification}
                />
                <InfoCard
                  Icon={AtSign}
                  label="Correo eléctronico"
                  value={fillData().loan.client.email}
                />
                <InfoCard
                  Icon={Phone}
                  label="Teléfono"
                  value={fillData().loan.client.phone}
                />
                <InfoCard
                  Icon={Suitcase}
                  label="Profesión"
                  value={fillData().loan.client.profession}
                />
              </fieldset>
            </form>
          </div>
          <QuotaInfo quotaData={fillData()} />
        </>
      )}
    </>
  );
};

export default PaymentDetailsPage;
