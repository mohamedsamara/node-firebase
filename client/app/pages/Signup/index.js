import React from 'react';

import { Form, FormInput, FormGroup, Button, Alert } from 'shards-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { navigate } from '@reach/router';

import { useAuth } from '../../contexts/Auth';
import Feedback from '../../components/Feedback';
import Fade from '../../components/Fade';

const Signup = () => {
  const { signUp, error } = useAuth();

  const handleSignupSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);

      signUp(values).then(done => {
        if (done) {
          navigate('/dashboard');
        }
      });
    }, 400);
  };

  return (
    <div className='row'>
      <div className='col-12 col-md-6 offset-md-3'>
        <div className='signup'>
          <Fade show={error.signup?.isError}>
            <Alert theme='danger'>{error.signup?.message}</Alert>
          </Fade>

          <h4>Sign Up</h4>

          <Formik
            initialValues={{
              email: '',
              password: '',
              firstName: '',
              lastName: ''
            }}
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
                    errors.password && touched.password && 'form-group-error'
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

                <FormGroup
                  className={
                    errors.firstName && touched.firstName && 'form-group-error'
                  }
                >
                  <label htmlFor='#firstName'>First Name</label>
                  <FormInput
                    id='#firstName'
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={
                      errors.firstName && touched.firstName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                </FormGroup>
                {errors.firstName && touched.firstName && (
                  <Feedback message={errors.firstName} />
                )}

                <FormGroup
                  className={
                    errors.lastName && touched.lastName && 'form-group-error'
                  }
                >
                  <label htmlFor='#password'>Last Name</label>
                  <FormInput
                    id='#lastName'
                    type='text'
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={
                      errors.lastName && touched.lastName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                </FormGroup>
                {errors.lastName && touched.lastName && (
                  <Feedback message={errors.lastName} />
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
