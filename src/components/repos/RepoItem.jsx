import React from 'react'
import {FaLink, FaEye, FaStar, FaInfo, FaUtensils} from 'react-icons/fa'
import {motion} from 'framer-motion'

function RepoItem({repo}) {
    const {
        html_url,
        description,
        forks,
        open_issues,
        watchers_count,
        name,
        stargazers_count
    } = repo


  return (
    <motion.div className="repo-item" 
    initial = {{opacity: 0, x: -200}}
    whileInView = {{opacity: 1, x: 0}}
    viewport = {{once: true}}
    transition = {{type: 'spring', stiffness: 60}}
    
    >
        <a href={html_url} className= 'link-edited lt-txt'>
            <FaLink /> {name}
        </a>
        <p className='lt-txt mt-1 small-txt'>{description}</p>
       <div className="badges">
            <div className="watchers small-txt lt-txt mr-1">
                <FaEye color='#fff' className='mr-1'/>{watchers_count}
            </div>
            <div className="star-gazers small-txt lt-txt mr-1">
                <FaStar color='#fff' className='mr-1'/>{stargazers_count}
            </div>
            <div className="open-issues small-txt lt-txt mr-1">
                <FaInfo color='#fff' className='mr-1'/>{open_issues}
            </div>
            <div className="forks small-txt lt-txt mr-1">
                <FaUtensils color='#fff' className='mr-1'/>{forks}
            </div>
       </div>
    </motion.div>
  )
}

export default RepoItem