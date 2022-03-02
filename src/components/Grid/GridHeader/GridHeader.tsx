import React from 'react';

import { HeaderCell, HeaderContainer, HeaderRow } from './styled';
import { IGridHeader } from './types';

export const GridHeader = ({
  headerNames,
  headerTypes,
  showActions = false,
}: IGridHeader) => {
  return (
    <HeaderContainer>
      <HeaderRow>
        {headerNames.map((colName, index) => (
          <HeaderCell
            key={colName}
          >{`${colName}(${headerTypes[index]})`}</HeaderCell>
        ))}
        {showActions && <th>Actions</th>}
      </HeaderRow>
    </HeaderContainer>
  );
};
