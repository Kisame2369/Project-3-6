import { useSelector, useDispatch } from 'react-redux'
import { changeFilter, selectFilter } from '../redux/filterSlice'
import css from './SearchBox.module.css'

export default function SearchBox() {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  return (
    <div className={css.wrapper}>
      <span>Find contact by name</span>
      <input type='text' value={filter} onChange={handleChange} />
    </div>
  )
}