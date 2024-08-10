import { useEffect, useState } from "react";
import User from "./user";
import './style.css'

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState('ningh98')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    

    function fetchGithubUserData(){
        setLoading(true)
        fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                setUserData(data)
                setLoading(false)
                setUserName('')
            }
            console.log(data)
            })
    
    }

    function handleSubmit(){
        fetchGithubUserData()
    }

    useEffect(()=> {
        fetchGithubUserData()
    },[])

    if(loading){
        return <h1>Loading data ! Please wait</h1>
    }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={event=> setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  );
}
