import style from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className={style.searchBox}>
            Find contacts by name
            <input
                type="text"
                placeholder="Search contacts..."
                className={style.searchBoxInput}
                value={value}
                onChange={handleChange} />
        </div>
    )
}

export default SearchBox