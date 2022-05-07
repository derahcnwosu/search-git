import React, {useContext, useEffect} from 'react'
import gitHubContext from '../../context/github/gitHubContext'
import {useParams, Link} from 'react-router-dom'
import Spinner from './Spinner'
import RepoList from '../repos/RepoList'
import {FaUsers, FaUserFriends, FaCodepen, FaStore} from 'react-icons/fa'
import {motion} from 'framer-motion'

function User() {
    const {getUser, user, loading, getRepos, repos} = useContext(gitHubContext)


    const {
        avatar_url,
        name,
        type,
        hireable,
        bio,
        html_url,
        login,
        location,
        blog,
        twitter_username,
        followers,
        following,
        public_repos,
        public_gists
    } = user

    const params = useParams()
    useEffect(() => {
        getUser(params.login)
        getRepos(params.login)
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <Spinner/>
    }

  return (
      <div className='userpage'>
      <h2><Link to= '/' className='link-edited ghost-txt user-go-back'>GO BACK</Link></h2>
        <div className="user-page">
           <div className="single-user-image">
               <img src={avatar_url} alt="" width={200}/>
               <div className="image-name">
                {/* <p className='lt-txt'>{name}</p> */}
                <p className='lt-txt'>{login}</p>
               </div>
           </div>
           <div className="single-details">
               <div className="person-header">
                   <h2 className='lt-txt'>{name}</h2>
                   <div className="type lt-txt">{type}</div>
                   {hireable && (
                       <div className="hireable lt-txt">Hireable</div>
                   )}
               </div>
               <p className='lt-txt mt-1 bio'>{bio}</p>
               <a href={html_url} className="visit-git mt-1 link-edited lt-txt" target= 'blank' rel='no-referrer'>Visit Profile</a>

               <div className="user-stats">
                   {location && (
                       <div className="stat-div location">
                           <p className='ghost-txt'>Location</p>
                           <p className='lt-txt'>{location}</p>
                       </div>
                   )}
                   {blog && (
                       <div className="stat-div">
                           <p className='ghost-txt'>Website</p>
                           <p className='lt-txt'><a href={`https://${blog}`} target = '_blank' rel='noreferrer' className= 'link-edited lt-txt'>{blog}</a></p>
                       </div>
                   )}
                   {twitter_username && (
                       <div className="stat-div">
                           <p className='ghost-txt'>Twitter</p>
                           <p className='lt-txt'><a href={`https://twitter.com/${twitter_username}` } target= '_blank' rel='noreferrer' className='link-edited lt-txt'>{twitter_username}</a></p>
                       </div>
                   )}
               </div>
           </div>
        </div>
        <div className="user-info">
            <motion.div className="follower-count" 
                initial = {{opacity: 0}}
                animate ={{opacity: 1}}
                transition = {{duration: 1}}
            >
                <FaUsers color='rgb(241, 41, 91)' className='fa-users user-icons'/>
                <div className="followers">
                    <p className='ghost-txt'>Followers</p>
                    <h3 className='lt-txt'>{followers}</h3>
                </div>
            </motion.div>
            <motion.div className="following" 
                 initial = {{opacity: 0}}
                 animate ={{opacity: 1}}
                 transition = {{duration: 1, delay: 0.5}}
            >
                <FaUserFriends className='fa-user-friends user-icons' color='rgb(241, 41, 91)'/>
                <div className="following-count">
                <p className='ghost-txt'>Following</p>
                <h3 className='lt-txt'>{following}</h3>
                </div>
            </motion.div>
            <motion.div className="public-repos" 
                 initial = {{opacity: 0}}
                 animate ={{opacity: 1}}
                 transition = {{duration: 1, delay: 1}}
            >
                <FaCodepen color='rgb(241, 41, 91)' className='fa-code-pen user-icons'/>
                <div className="repos">
                    <p className='ghost-txt'>Public Repos</p>
                    <h3 className='lt-txt'>{public_repos}</h3>
                </div>
            </motion.div>
            <motion.div className="public-gists" 
                 initial = {{opacity: 0}}
                 animate ={{opacity: 1}}
                 transition = {{duration: 1, delay: 1.5}}
            >
                <FaStore className='fa-code-pen user-icons' color='rgb(241, 41, 91)'/>
                <div className="gists">
                <p className='ghost-txt'>Public Gists</p>
                <h3 className='lt-txt'>{public_gists}</h3>
                </div>
            </motion.div>
        </div>
        <RepoList repos = {repos}/>
      </div>
  )
}

export default User
