import { IconClose } from 'components/icons/close';
import React, { useState, FormEvent } from 'react';
import {
  Button,
  ErrorText,
  ErrorWrapper,
  Group,
  Label,
  LabelText,
  StyledInput,
} from './styled';
import { IProps } from './types';

export function TextField({
  disabled = false,
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  onClear,
  placeholder,
  type = 'text',
  value,
  autoFocus = false,
  optional = false,
  maxLength,
  ...props
}: IProps) {
  const [isFocused, setIsFocused] = useState(false);

  function onBlurInput(event: FormEvent<HTMLInputElement>) {
    onBlur && onBlur(event);
    setIsFocused(false);
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus && onFocus(event);
  }

  return (
    <Group data-testid="text-field-container">
      {label && (
        <Label htmlFor={id}>
          <LabelText>{label}</LabelText>
        </Label>
      )}
      <StyledInput
        ref={(input) => autoFocus && input && input.focus()}
        data-testid="text-field-input"
        disabled={disabled}
        error={error}
        id={id}
        name={name}
        onBlur={onBlurInput}
        onFocus={handleFocus}
        onChange={onChange}
        placeholder={placeholder || label}
        type="text"
        value={value}
        maxLength={maxLength}
        {...props}
      />
      <ErrorWrapper>
        {error && <ErrorText color="error">{error}</ErrorText>}
      </ErrorWrapper>
      {value !== '' && isFocused && onClear && (
        <Button
          data-testid="text-field-clear-button"
          onMouseDown={onClear}
          tabIndex={-1}
          type="button"
        >
          <IconClose size="24px" color="shadow" />
        </Button>
      )}
    </Group>
  );
}
