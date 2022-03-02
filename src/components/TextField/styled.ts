import styled, { css } from 'styled-components';
import { IInputProps } from './types';

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.error};
`;

export const LabelText = styled.p`
  color: ${(props) => props.theme.colors.black};
`;

export const FocusRing = css`
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.focus};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`;

export const FocusRingError = css`
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.focusError};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focusError};
  }
`;

export const Group = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;

  p {
    line-height: 24px;
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 10px;
`;

export const StyledInput = styled.input<IInputProps>`
  background: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.iron};
  font-size: 16px;
  margin: 8px;
  display: block;
  width: 100%;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
  height: 40px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.shadow};
  }

  ${FocusRing};
  border: 1px solid ${({ theme }) => theme.colors.silver};

  ${({ error }) =>
    error
      ? css`
          ${FocusRingError};
          border-color: ${({ theme }) => theme.colors.error};
        `
      : ''};
`;

export const ErrorWrapper = styled.div`
  margin-top: 6px;
  min-height: 16px;
`;

export const Button = styled.button<{ error?: string }>`
  position: absolute;
  right: 10px;
  top: 64px;
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
