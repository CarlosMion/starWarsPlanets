import React from 'react';
import { valueToKeyNamesMap } from 'utils/constants';

import './Grid.css';
import { IGridData } from './types';

export const Grid = ({ headers, values, actions }: IGridData) => {
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
};
