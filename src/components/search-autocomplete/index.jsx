import { useEffect, useState } from "react";
import Suggestion from "./suggesstion";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event){
    console.log(event.target.innerText)
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  function fetchListOfUser() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.users && data.users.length) {
          setUsers(data.users.map((user) => user.firstName));
          setLoading(false);
          setError(null);
        }
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(err);
      });
  }

  useEffect(() => {
    fetchListOfUser();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          type="text"
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestion handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
