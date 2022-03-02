import React from 'react';

import { IPlanet } from 'api/planets/types';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';

import { AlignableCell, BodyContainer, BodyRow } from './styled';
import { IAction, IGridBody } from './types';
import { GridVariants } from '../types';
import { GridBodyValue } from '../GridBodyValue';

export const GridBody = ({
  headerNames,
  headerTypes,
  values,
  variant,
  openEditPlanet,
}: IGridBody) => {
  const isPlanet = variant === GridVariants.PLANETS;

  return (
    <BodyContainer>
      {values.map((row, index) => (
        <BodyRow key={index}>
          <GridBodyValue
            headerNames={headerNames}
            headerTypes={headerTypes}
            variant={variant}
            value={row}
          />
          {isPlanet && (
            <AlignableCell>
              {!!row.actions.length &&
                row.actions.map((actionItem: IAction) => (
                  <>
                    {actionItem && (
                      <Button
                        key={actionItem.label}
                        onClick={() =>
                          (actionItem.action && actionItem.action(row)) ??
                          undefined
                        }
                        to={actionItem.to && actionItem.to(row)}
                        as={actionItem.to ? Link : undefined}
                      >
                        {actionItem.label}
                      </Button>
                    )}
                  </>
                ))}
              {isPlanet && openEditPlanet && (
                <Button onClick={() => openEditPlanet(row as IPlanet)}>
                  Edit
                </Button>
              )}
            </AlignableCell>
          )}
        </BodyRow>
      ))}
    </BodyContainer>
  );
};
