import styled from 'styled-components';

import { IToastProps } from './types';

export const ToastContainer = styled.div<IToastProps>`
  align-items: flex-start;
  border-radius: 4px;
  min-height: 52px;
  display: flex;
  flex-direction: row;
  padding: 14px 16px;
  ${({ variant, theme }) =>
    variant === 'success' ? `background-color: ${theme.colors.green}` : ''};
  ${({ variant, theme }) =>
    variant === 'error' ? `background-color: ${theme.colors.error}` : ''};
`;

export const ToastMessage = styled.p`
  color: white;
`;
