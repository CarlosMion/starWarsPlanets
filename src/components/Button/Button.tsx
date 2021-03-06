import React, { forwardRef } from 'react';

import { LoadingDots } from 'components/LoadingDots';

import { ButtonStyled, Label, Loading } from './styled';
import { Props, Ref } from './types';

export const Button = forwardRef<Ref, Props>(function Button(
  {
    as,
    children,
    disabled = false,
    isLoading,
    onClick,
    to,
    type = 'button',
    ...rest
  },
  ref
) {
  return (
    <ButtonStyled
      as={as}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      onClick={onClick}
      type={as ? undefined : type}
      ref={ref}
      to={to}
      href={as === 'a' ? to : undefined}
      {...rest}
    >
      <>
        <Label isLoading={isLoading} color="white">
          {children}
        </Label>
        {isLoading && (
          <Loading>
            <LoadingDots />
          </Loading>
        )}
      </>
    </ButtonStyled>
  );
});
