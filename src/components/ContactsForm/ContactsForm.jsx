import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import {
  AddContactToForm,
  ButtontToAddContact,
  ErrorMes,
  FieldInput,
  Label,
} from './ContactsForm.styled';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'To short')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'To short')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactsForm = ({ contacts, onSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (nameInContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const createNewContact = { id: nanoid(), name, number };

    onSubmit(createNewContact);

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validateSchema={ContactsSchema}
    >
      <AddContactToForm>
        <Label>
          Name
          <FieldInput type="text" name="name" />
          <ErrorMes name="name" component="div" />
        </Label>
        <Label>
          Number
          <FieldInput type="tel" name="number" />
          <ErrorMes name="number" component="div" />
        </Label>
        <ButtontToAddContact type="submit">Add contact</ButtontToAddContact>
      </AddContactToForm>
    </Formik>
  );
};
