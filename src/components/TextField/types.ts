export interface IErrorProps {
  error?: string;
}

export interface IInputProps extends IErrorProps {
  disabled?: boolean;
  id: string;
  name: string;
  onBlur?(e: any): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: string;
  value?: string | number;
}

export interface IProps extends IInputProps {
  label?: string;
  autoFocus?: boolean;
  onClear?: () => void;
  maxLength?: number;
  optional?: boolean;
}
