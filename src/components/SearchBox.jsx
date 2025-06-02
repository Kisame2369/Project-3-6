import { useSelector, useDispatch } from 'react-redux'
import { changeFilters, selectFilters } from '../redux/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBox() {
  const filters = useSelector(selectFilters)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeFilters(event.target.value))
  }

  return (
    <div className={css.wrapper}>
      <span>Find contact by name</span>
      <input type='text' value={filters} onChange={handleChange} />
    </div>
  )
}