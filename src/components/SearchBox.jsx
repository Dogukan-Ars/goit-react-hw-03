
const SearchBox = ({ value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search contacts..."
                value={value}
                onChange={handleChange} />
        </>
    )
}

export default SearchBox