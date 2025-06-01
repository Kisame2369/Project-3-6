import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'
import { addContact } from '../redux/contactsSlice'
import css from './ContactForm.module.css'

const contactValidation = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
})

export default function ContactForm() {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }
    dispatch(addContact(newContact))
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactValidation}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.btn}>Add contact</button>
      </Form>
    </Formik>
  )
}