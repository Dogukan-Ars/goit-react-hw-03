const SearchBox = ({ value, onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <>
            Find contacts by name
            <input
                type="text"
                placeholder="Search contacts..."
                className="search-box"
                value={value}
                onChange={handleChange} />
        </>
    )
}

export default SearchBox