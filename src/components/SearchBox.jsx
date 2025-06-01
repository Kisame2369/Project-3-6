import css from './SearchBox.module.css';

export default function SearchBox({ text, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <span>Find contact by name</span>
      <input type='text' value={text} onChange={handleChange} />
    </div>
  );
}