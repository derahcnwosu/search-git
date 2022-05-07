import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className="repo-list"
    >
        <h2 className="lt-txt">Latest Repositories</h2>
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
    </div>
  )
}

export default RepoList
