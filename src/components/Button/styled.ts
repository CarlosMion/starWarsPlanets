import styled from 'styled-components';
import { ButtonProps, Props } from './types';

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: 'gray';
  border: none;
  padding: 0;
  margin: 0 5px;
  opacity: ${({ disabled, isLoading }) => (disabled && !isLoading ? 0.2 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 40px;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Label = styled.span<Props>`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`;

export const Loading = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
