import React from 'react';
import { getMapKeyByValue } from 'utils';
import { keyToValueNamesMap, valueToKeyNamesMap } from 'utils/constants';

import './Grid.css';
import { IGridData } from './types';

function Grid({ headers, values, actions }: IGridData) {
  console.log('>>> values', values);
  console.log(
    '>>>>> uai',
    getMapKeyByValue({ map: keyToValueNamesMap, valueToBeSearched: 'climate' })
  );

  return (
    <table className="gridTable">
      <thead>
        <tr>
          {headers.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {headers.map((colName) => (
              <td key={colName}>
                {row[valueToKeyNamesMap.get(colName) ?? '']}
              </td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action }) => (
                  <button key={label} onClick={() => action(row)}>
                    {label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
