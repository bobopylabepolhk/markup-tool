import React, { ButtonHTMLAttributes } from 'react';

type NonAwaitedButton = {
  mechanic?: 'non-awaited';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
};

type AwaitedButton = {
  mechanic: 'awaited';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<unknown>;
  loading?: undefined;
};

type SubmitButton = {
  mechanic: 'submit';
  onClick?: undefined;
  loading: boolean;
};

type ButtonVariant = 'default' | 'contrast' | 'danger';

type GeneralButtonProps = {
  variant: ButtonVariant;
  disabled?: boolean;
  withShadow?: boolean;
};

type CombinedButtonProps = GeneralButtonProps & (NonAwaitedButton | AwaitedButton | SubmitButton);

type ButtonProps = React.PropsWithChildren<CombinedButtonProps> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export type { ButtonProps, ButtonVariant };
