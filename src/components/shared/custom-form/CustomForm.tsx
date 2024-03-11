import { CustomFormProps, FieldSetProps } from "@models/ComponentModels";

import {
  IconButton,
  InputIndicator,
  InputText,
  LabeledButton,
  RadioButtonList,
  Select,
  TextArea,
} from "@components/index";

import styles from "./CustomForm.module.css";

const CustomForm = (props: CustomFormProps): JSX.Element => {
  const { children, formTitle, Icon, formRef, handleSubmit } = props;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <figure className={styles.formMark}>
        <Icon />
      </figure>
      <h2 className="heading2"> {formTitle} </h2>
      {children}
    </form>
  );
};

const FieldSet = ({ children, setStyle }: FieldSetProps): JSX.Element => {
  return (
    <fieldset className={styles.fieldset + " " + styles[setStyle]}>
      {children}
    </fieldset>
  );
};

CustomForm.FieldSet = FieldSet;
CustomForm.Input = InputText;
CustomForm.Select = Select;
CustomForm.RadioButtonList = RadioButtonList;
CustomForm.TextArea = TextArea;
CustomForm.InputIndicator = InputIndicator;
CustomForm.LabeledButton = LabeledButton;
CustomForm.IconButton = IconButton;

export default CustomForm;
