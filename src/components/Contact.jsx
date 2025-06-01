import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.info}>
                <p className={css.text}>{name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}