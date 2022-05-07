import React from 'react'

function About() {
  return (
    <div className="about">
        <h1 className="lt-txt mt-8">
            GitHub Finder App
        </h1>
        <p className='lt-txt mt-2'>This is an API focused project used to search github users and display user information.</p>
        <p className="lt-txt mt-1">Built by Dera Nwosu on ReactJS with primary focus on these concepts.</p>
        <p className="lt-txt mt-1">
            <div className="badges">
                <div className="watchers mr-1">Context API</div>
                <div className="forks mr-1">useReducer</div>
                <div className="open-issues mr-1">API</div>
                <div className="watchers mr-1">useState</div>
                <div className="forks mr-1">react-router-dom</div>
            </div>
        </p>
    </div>
  )
}

export default About