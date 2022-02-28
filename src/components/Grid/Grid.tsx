import { IPlanet } from 'api/planets/types';
import { Button } from 'components/Button';
import { EditPlanet } from 'components/Dialogs/EditPlanet';
import { useDialogModal } from 'hooks/useDialogModal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { valueToKeyNamesMap } from 'utils/constants';

import './Grid.css';
import { IAction, IGridData } from './types';

export const Grid = ({ headers, values, hasActions }: IGridData) => {
  const [EditPlanetModal, openEditPlanetModal] = useDialogModal({
    Component: EditPlanet,
  });
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanet>();

  const editPlanet = (planet: IPlanet) => {
    setSelectedPlanet(planet);
    console.log('planet', planet);
    openEditPlanetModal();
  };

  return (
    <>
      <table className="gridTable">
        <thead>
          <tr>
            {headers.map((colName) => (
              <th key={colName}>{colName}</th>
            ))}
            {hasActions && <th>Actions</th>}
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
              {
                <td className="gridActions">
                  {!!row.actions.length &&
                    row.actions.map((actionItem: IAction) => (
                      <>
                        {actionItem && (
                          <Button
                            key={actionItem.label}
                            onClick={() => actionItem.action(row)}
                            to={actionItem.to}
                            as={actionItem.to ? Link : undefined}
                          >
                            {actionItem.label}
                          </Button>
                        )}
                      </>
                    ))}
                  <Button onClick={() => editPlanet(row)}>Edit</Button>
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
      <EditPlanetModal planet={selectedPlanet} />
    </>
  );
};
