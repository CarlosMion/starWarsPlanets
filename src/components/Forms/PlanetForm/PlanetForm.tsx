import React, { useState } from 'react';

import 'react-dropdown-now/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'components/TextField';

import { IPlanetInfoForm, IPlanetForm } from './types';
import { showToast } from 'components/Toast';
import { REQUIRED_FIELD_ERROR, terrainDropdownOptions } from './constants';
import { Form, FullWidthDropdown, RegisterButton } from './styled';
import { planetKeyToValueNamesMap } from 'utils/constants';

export function PlanetForm({ onConfirmForm }: IPlanetForm) {
  const [isLoading, setIsLoading] = useState(false);
  const [planetInfo, setPlanetInfo] = useState();

  const EditPlanetSchema: any = Yup.object().shape({
    name: Yup.string().required(REQUIRED_FIELD_ERROR),
    rotation_period: Yup.number().required(REQUIRED_FIELD_ERROR),
    orbital_period: Yup.number().required(REQUIRED_FIELD_ERROR),
    diameter: Yup.number().required(REQUIRED_FIELD_ERROR),
    climate: Yup.string().required(REQUIRED_FIELD_ERROR),
    gravity: Yup.string().required(REQUIRED_FIELD_ERROR),
    terrain: Yup.string().required(REQUIRED_FIELD_ERROR),
    surface_water: Yup.number().required(REQUIRED_FIELD_ERROR),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      rotation_period: 0,
      orbital_period: 0,
      diameter: 0,
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: 0,
    },
    validationSchema: EditPlanetSchema,
    onSubmit: async () => {
      setIsLoading(true);
      const newPlanetInfo: IPlanetInfoForm = {
        name: formik.values.name,
        rotation_period: formik.values.rotation_period,
        orbital_period: formik.values.orbital_period,
        diameter: formik.values.diameter,
        climate: formik.values.climate,
        gravity: formik.values.gravity,
        terrain: formik.values.terrain,
        surface_water: formik.values.surface_water,
      };
      console.log('>>> result: ', { newPlanetInfo });

      const showSuccess = !!Math.round(Math.random());

      showToast({
        message: showSuccess
          ? `Planet successfully edited!`
          : `oops, something went wrong!`,
        variant: showSuccess ? 'success' : 'error',
      });

      onConfirmForm();

      setIsLoading(false);
    },
  });

  console.log(formik.values);

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        error={formik.touched.name ? formik.errors.name : ''}
        id="name"
        label={planetKeyToValueNamesMap.get('name')}
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('name', '')}
        placeholder={planetKeyToValueNamesMap.get('name')}
        value={formik.values.name}
      />
      <TextField
        error={
          formik.touched.rotation_period ? formik.errors.rotation_period : ''
        }
        id="rotation_period"
        label={planetKeyToValueNamesMap.get('rotation_period')}
        name="rotation_period"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('rotation_period', '')}
        placeholder={planetKeyToValueNamesMap.get('rotation_period')}
        value={formik.values.rotation_period}
      />
      <TextField
        error={
          formik.touched.orbital_period ? formik.errors.orbital_period : ''
        }
        id="orbital_period"
        label={planetKeyToValueNamesMap.get('orbital_period')}
        name="orbital_period"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('orbital_period', '')}
        placeholder={planetKeyToValueNamesMap.get('orbital_period')}
        value={formik.values.orbital_period}
      />
      <TextField
        error={formik.touched.diameter ? formik.errors.diameter : ''}
        id="diameter"
        label={planetKeyToValueNamesMap.get('diameter')}
        name="diameter"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('diameter', '')}
        placeholder={planetKeyToValueNamesMap.get('diameter')}
        value={formik.values.diameter}
      />
      <TextField
        error={formik.touched.climate ? formik.errors.climate : ''}
        id="climate"
        label={planetKeyToValueNamesMap.get('climate')}
        name="climate"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('climate', '')}
        placeholder={planetKeyToValueNamesMap.get('climate')}
        value={formik.values.climate}
      />
      <TextField
        error={formik.touched.gravity ? formik.errors.gravity : ''}
        id="gravity"
        label={planetKeyToValueNamesMap.get('gravity')}
        name="gravity"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('gravity', '')}
        placeholder={planetKeyToValueNamesMap.get('gravity')}
        value={formik.values.gravity}
      />
      <FullWidthDropdown
        placeholder={planetKeyToValueNamesMap.get('terrain')}
        options={terrainDropdownOptions}
        value="terrain"
        onSelect={(value) => formik.setFieldValue('terrain', value)}
      />
      <TextField
        error={formik.touched.surface_water ? formik.errors.surface_water : ''}
        id="surface_water"
        label={planetKeyToValueNamesMap.get('surface_water')}
        name="surface_water"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('surface_water', '')}
        placeholder={planetKeyToValueNamesMap.get('surface_water')}
        value={formik.values.surface_water}
      />
      <RegisterButton type="submit" isLoading={isLoading}>
        Confirm
      </RegisterButton>
    </Form>
  );
}
