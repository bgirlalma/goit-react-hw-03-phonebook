import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import {Container, FormStyle, FieldStyle, SubmitStyled, LabelStaled, PhoneTitle} from './phonebook.styled'
import { Component } from 'react';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      number: Yup.number()
      .min(10, 'Too Short!')
      .required('Required'),
  });

export class InputPhonebook extends Component {
  render() {
    const {onSearchContacts, title, children} = this.props;

    return (
      <Container>
        <PhoneTitle>{title}</PhoneTitle>
        {children}

            <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
     onSubmit={(values, actions) => {
      onSearchContacts({...values, id: nanoid()});
      actions.resetForm();

     }}
    >
      <FormStyle>
        <LabelStaled htmlFor="name">Name
        <FieldStyle id="name" name="name" type="text" required placeholder="Aron Paper" />
        </LabelStaled>
        <ErrorMessage name="name" component="div"/>
  
        <LabelStaled htmlFor="number">Number
        <FieldStyle id="number" name="number" type="text" required placeholder="3801003322" />
        </LabelStaled>
        <ErrorMessage name="number" component="div"/>
        
        <SubmitStyled type="submit">Add contact</SubmitStyled>
      </FormStyle>
    </Formik>
      </Container>
    
  )
  }
}