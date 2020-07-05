import React from 'react';

import { Form, FormInput, FormGroup, Button } from 'shards-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Feedback from '../../components/Feedback';

const Signup = () => {
  const handleSignupSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className='row'>
      <div className='col-12 col-md-6 offset-md-3'>
        <div className='signup'>
          <h4>Sign Up</h4>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required('Required'),
              password: Yup.string().required('Required')
            })}
            onSubmit={handleSignupSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit} className='mt-4'>
                <FormGroup
                  className={
                    errors.email && touched.email && 'form-group-error'
                  }
                >
                  <label htmlFor='#email'>Email</label>
                  <FormInput
                    id='#email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      errors.email && touched.email
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                </FormGroup>
                {errors.email && touched.email && (
                  <Feedback message={errors.email} />
                )}
                <FormGroup
                  className={
                    errors.passowrd && touched.passowrd && 'form-group-error'
                  }
                >
                  <label htmlFor='#password'>Password</label>
                  <FormInput
                    id='#password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      errors.password && touched.password
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                </FormGroup>
                {errors.password && touched.password && (
                  <Feedback message={errors.password} />
                )}
                <Button
                  pill
                  type='submit'
                  disabled={isSubmitting}
                  className='mt-3'
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
