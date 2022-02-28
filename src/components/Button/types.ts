import { ElementType } from 'react';

interface LabelProps {
  isLoading?: boolean;
}

export type Ref = HTMLButtonElement;

export type ButtonProps = LabelProps & {
  as?: ElementType;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button';
  to?: string;
};

export type Props = ButtonProps & {
  children: any;
};
