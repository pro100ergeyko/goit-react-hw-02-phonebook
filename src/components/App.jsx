import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
// import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import { Container } from './Container.styled';

const PhoneBookSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    ),
  number: Yup.number()
    .min(7, 'Too Short!')
    .max(9, 'Too Long!')
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export class App extends Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{ contacts: [], filter: '', name: '', number: '' }}
          validationSchema={PhoneBookSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Form>
            <label>
              Name
              <Field name="name" type="text" />
            </label>
            <label>
              Number
              <Field name="number" type="number" />
            </label>

            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </Container>
    );
  }
}
