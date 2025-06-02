import { useSelector } from 'react-redux'
import Contact from './Contact'
import { selectContacts } from '../redux/contactsSlice'
import { selectFilters } from '../redux/filtersSlice'
import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectContacts)
  const filters = useSelector(selectFilters)

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  )

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}
