import styled from 'styled-components';
import { Dropdown } from 'react-dropdown-now';

import { Button } from 'components/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterButton = styled(Button)`
  margin-top: 24px;
`;

export const FullWidthDropdown = styled(Dropdown)`
  width: 100%;
  margin: 8px;

  span {
    width: 2px;
  }
`;
