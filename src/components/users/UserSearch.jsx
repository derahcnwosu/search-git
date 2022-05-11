import React, {useState, useContext, useRef} from 'react'
import gitHubContext from '../../context/github/gitHubContext'
import UserList from './UserList'

function UserSearch() {
    const {fetchUsers, users, clearUsers} = useContext(gitHubContext)
    const [text, setText] = useState('')

    const textRef = useRef()

    const handleTextChange = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit = () =>{
        fetchUsers(text)
        // textRef.current.style.display = 'none'
        setText('')
    }

  return (
    <div className="user-search container mx-auto">
        <h2 className='lt-txt font-3x header-txt' ref={textRef}>Find GitHub Users</h2>
        <div className="input-group">
            <input type="text" name="search-input" id="search-input" placeholder='Enter username' onChange={handleTextChange} value={text}/>
            <button type="submit" className='search-btn' onClick={handleSubmit}>Search</button>
        </div>
        {users.length !== 0 && <button type="submit" className='clear-btn' onClick={clearUsers}>Clear</button>}
        <UserList />
    </div>
  )
}

export default UserSearch
