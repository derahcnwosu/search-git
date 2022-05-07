import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function User({user: {login, avatar_url}}) {
  return (
    <motion.div className="user"
      initial = {{opacity: 0}}
      whileInView = {{opacity: 1}}
      transition = {{duration: 1}}
    >
        <div className="user-avatar">
            <img src={avatar_url} className= 'profile-pic' alt="pic" width={50}/>
        </div>
        <div className="user-name">
          {login}
          <p><Link className='lt-link' to= {`/user/${login}`}>View Profile</Link></p>  
        </div>
    </motion.div>
  )
}

export default User