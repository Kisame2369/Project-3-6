import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/contactsSlice'
import css from './Contact.module.css'

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}