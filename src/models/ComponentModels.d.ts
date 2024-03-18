import { ChangeEvent, FormEvent, ReactNode } from "react";

import { Step, PaginationConfig, Columnkey } from "./DataModels";

type ButtonType = "button" | "submit";
type ButtonVariantType =
  | "primary"
  | "danger"
  | "secondary"
  | "warning"
  | "neutral"
  | "outline";

type InputType = "text" | "number" | "date" | "phone" | "password";
type FormStylesType = "flexForm" | "gridForm";
type TableHeaderType = {
  label: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
};

type TableResponsiveValueType = {
  label: string;
  value: string | number;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
};

interface LogoProps {
  title?: string;
}

interface BaseButtonProps {
  children?: ReactNode | ReactNode[];
  id: string;
  type: ButtonType;
  title: string;
  variant: ButtonVariantType;
  disabled?: boolean;
  loading: boolean;
  onClick: () => void;
}

interface LabeledButtonProps extends BaseButtonProps {
  label: string;
}

interface IconButtonProps extends LabeledButtonProps {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
}

interface IconOnlyButtonProps extends BaseButtonProps {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
}

interface CustomLinkProps {
  label: string;
  to: string;
  linkText: string;
}

interface InputBaseProps {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  label: string;
  errorMessage: string;
  userHint?: string;
}

interface InputProps {
  id: string;
  type: InputType;
  name: string;
  label: string;
  placeholder: string;
  value: string | number;
  errorMessage: string;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  errorMessage: string;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface RadioButtonListProps {
  id: string;
  label: string;
  errorMessage: string;
  userHint?: string;
  radioButtons: RadioButtonProps[];
}

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  autoResize?: boolean;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface InputIndicatorProps extends InputProps {
  indicatorLabel: string;
}

interface CustomFormProps {
  children: ReactNode | ReactNode[];
  formTitle: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface FieldSetProps {
  children: ReactNode | ReactNode[];
  id: string;
  setStyle: FormStylesType;
}

interface ErrorMessageProps {
  message: string;
}

interface StepperProps {
  steps: Step[];
}

interface PaginationProps {
  paginationConfig: PaginationConfig;
}

interface TableProps {
  children: ReactNode | ReactNode[];
  headers: TableHeaderType[];
  paginationConfig?: PaginationConfig;
}

interface ResponsiveTableProps {
  children: ReactNode | ReactNode[];
  paginationConfig?: PaginationConfig;
}

interface TableResponsiveRecordProps {
  title: string;
  values: TableResponsiveValueType[];
  children?: ReactNode | ReactNode[];
}

interface RowProps {
  children: ReactNode | ReactNode[];
}

interface ColumnProps {
  value?: number | string;
  children?: ReactNode | ReactNode[];
}

interface ClientSearchValidationProps {
  clientFounded: boolean;
}

interface CardProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  value: string;
  moreDetailsLink?: string;
  captionText: string;
  variant: "primary" | "neutral" | "warning" | "danger" | "light";
}

interface CardListProps {
  children: ReactNode | ReactNode[];
}

interface TableToolsProps {
  recordsToList: string;
  searchValue: string | number;
  searchLabel: string;
  buttonLabel?: string;
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addRecordFunction?: () => void;
}

interface TablesProps<T> {
  children?: ReactNode | ReactNode[];
  headers: TableHeaderType[];
  recordsData: T[];
  columnKeys: Columnkey[];
  recordTitle: string;
  getOptions?: (record: T) => IconOnlyButtonProps[];
  paginationConfig?: PaginationConfig;
}

interface FilterProps {
  children?: ReactNode | ReactNode[];
  filterOptions: IconButtonProps[];
  chosenFilter: string;
  onChangeFilter: (filter: string) => void;
}

interface IndicatorSectionProps {
  children: ReactNode | ReactNode[];
}

interface BadgeProps {
  label: string;
  variant: "primary" | "danger" | "warning" | "light" | "neutral";
}

interface InfoSectionProps {
  sectionTitle: string;
  labelId: string;
  link: string;
  recordId: string;
  buttonLabel?: string;
}

interface DialogProps {
  open: boolean;
  dialogMessage: string;
  acceptButtonLabel: string;
  toggleChosenOption: (option: "Yes" | "Not") => void;
  toggleDialog: () => void;
}

interface ModalProps {
  children: ReactNode | ReactNode[];
  modalTitle: string;
  isModalVisible: boolean;
  toggleModal: () => void;
}

interface ModalWindowProps {
  children: ReactNode | ReactNode[];
}

interface LoanFormProps {
  toggleModal: () => void;
}

interface LoaderProps {
  message: string;
}

export type {
  TableHeaderType,
  LogoProps,
  BaseButtonProps,
  LabeledButtonProps,
  IconButtonProps,
  IconOnlyButtonProps,
  CustomLinkProps,
  InputBaseProps,
  InputProps,
  SelectProps,
  RadioButtonListProps,
  RadioButtonProps,
  TextAreaProps,
  InputIndicatorProps,
  CustomFormProps,
  FieldSetProps,
  ErrorMessageProps,
  StepperProps,
  PaginationProps,
  TableToolsProps,
  TableProps,
  ResponsiveTableProps,
  TableResponsiveRecordProps,
  RowProps,
  ColumnProps,
  ClientSearchValidationProps,
  CardProps,
  CardListProps,
  TablesProps,
  FilterProps,
  IndicatorSectionProps,
  BadgeProps,
  InfoSectionProps,
  DialogProps,
  ModalProps,
  ModalWindowProps,
  LoanFormProps,
  LoaderProps,
};
