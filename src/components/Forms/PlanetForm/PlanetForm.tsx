import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'components/TextField';

import { IPlanetInfoForm, IPlanetForm } from './types';
import { showToast } from 'components/Toast';
import { REQUIRED_FIELD_ERROR } from './constants';
import { Form, RegisterButton } from './styled';
import { keyToValueNamesMap } from 'utils/constants';

export function PlanetForm({ onConfirmForm }: IPlanetForm) {
  const [isLoading, setIsLoading] = useState(false);

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

      const showSuccess = !!Math.floor(Math.random() * 1 + 0);

      showToast({
        message: showSuccess
          ? `Planet successfully edited!`
          : `oops, something went wrong!`,
        variant: showSuccess ? 'success' : 'error',
      });

      setIsLoading(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
        error={formik.touched.name ? formik.errors.name : ''}
        id="name"
        label={keyToValueNamesMap.get('name')}
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('name', '')}
        placeholder={keyToValueNamesMap.get('name')}
        value={formik.values.name}
      />
      <TextField
        error={
          formik.touched.rotation_period ? formik.errors.rotation_period : ''
        }
        id="rotation_period"
        label={keyToValueNamesMap.get('rotation_period')}
        name="rotation_period"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('rotation_period', '')}
        placeholder={keyToValueNamesMap.get('rotation_period')}
        value={formik.values.rotation_period}
      />
      <TextField
        error={
          formik.touched.orbital_period ? formik.errors.orbital_period : ''
        }
        id="orbital_period"
        label={keyToValueNamesMap.get('orbital_period')}
        name="orbital_period"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('orbital_period', '')}
        placeholder={keyToValueNamesMap.get('orbital_period')}
        value={formik.values.orbital_period}
      />
      <TextField
        error={formik.touched.diameter ? formik.errors.diameter : ''}
        id="diameter"
        label={keyToValueNamesMap.get('diameter')}
        name="diameter"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('diameter', '')}
        placeholder={keyToValueNamesMap.get('diameter')}
        value={formik.values.diameter}
      />
      <TextField
        error={formik.touched.climate ? formik.errors.climate : ''}
        id="climate"
        label={keyToValueNamesMap.get('climate')}
        name="climate"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('climate', '')}
        placeholder={keyToValueNamesMap.get('climate')}
        value={formik.values.climate}
      />
      <TextField
        error={formik.touched.gravity ? formik.errors.gravity : ''}
        id="gravity"
        label={keyToValueNamesMap.get('gravity')}
        name="gravity"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('gravity', '')}
        placeholder={keyToValueNamesMap.get('gravity')}
        value={formik.values.gravity}
      />
      <TextField
        error={formik.touched.terrain ? formik.errors.terrain : ''}
        id="terrain"
        label={keyToValueNamesMap.get('terrain')}
        name="terrain"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('terrain', '')}
        placeholder={keyToValueNamesMap.get('terrain')}
        value={formik.values.terrain}
      />
      <TextField
        error={formik.touched.surface_water ? formik.errors.surface_water : ''}
        id="surface_water"
        label={keyToValueNamesMap.get('surface_water')}
        name="surface_water"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        onClear={() => formik.setFieldValue('surface_water', '')}
        placeholder={keyToValueNamesMap.get('surface_water')}
        value={formik.values.surface_water}
      />
      <RegisterButton type="submit" isLoading={isLoading}>
        Confirm
      </RegisterButton>
    </Form>
  );
}
