import styled from 'styled-components';

export const BodyContainer = styled.tbody`
  padding: 5px 10px;
`;

export const BodyRow = styled.tr`
  padding: 5px 10px;
`;

export const AlignableCell = styled.td<{ type?: string }>`
  text-align: ${({ type }) => (type && type === 'number' ? 'right' : 'center')};
`;
