import styled from 'styled-components';

export const BodyContainer = styled.tbody`
  padding: 16px 10px;
`;

export const BodyRow = styled.tr`
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  margin: 8px;

  &:hover {
    background: #f1f1f1;
  }
`;

export const AlignableCell = styled.td<{ type?: string }>`
  text-align: ${({ type }) => (type && type === 'number' ? 'right' : 'center')};
  padding: 24px 8px;
  padding-right: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 400px;
  min-width: 300px;
`;
