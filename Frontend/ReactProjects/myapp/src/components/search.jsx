const Search = () => {
    return (
        <div>
            <form className="w-25 mx-auto">

                <lable className="form-label">Search</lable>
                <div className="d-flex flex-row">
                    <input className="form-control" type="text" placeholder="Enter first name to search" />
                    <input className="btn btn-secondary" type="submit" value="Search" />
                </div>

            </form >
        </div >
    );
}

export default Search;