import React, {useContext} from 'react'
import gitHubContext from '../../context/github/gitHubContext'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

function UserList() {
    const {users, loading} = useContext(gitHubContext)

    if(!loading) {
        return (
          <div className="user-list">
              {users.map((user) => (
                  <UserItem user={user} key ={user.id}/>
              ))}
          </div>
        )
    } else {
        return (<div className = 'user-list'><Spinner /></div>)
    }
}

export default UserList