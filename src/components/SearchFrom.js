import React from 'react';

function SearchFrom({ handleInputChange, value, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={handleInputChange}
                    value={value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by First and Last Name"
                    id="search"
                />
                {/* <br />
                <button onClick={handleFormSubmit} className="btn btn-primary">
                    Search
        </button> */}
            </div>
        </form>
    );
}

export default SearchFrom;