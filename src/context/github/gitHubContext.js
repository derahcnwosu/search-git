import {createContext, useReducer} from 'react'
import gitHubReducer from './gitHubReducer'
 
const gitHubContext = createContext();


export const GitHubProvider = ({children}) => {

    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)



  


    const fetchUsers = async(text) => {

        dispatch({
            type: 'SET_LOADING_TRUE',
            payload: true
        })
        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
        dispatch({
            type: 'SET_LOADING_FALSE',
            payload: false
        })
        console.log(items)
    }

    const getUser = async(login) => {
        dispatch({
            type: 'SET_LOADING_TRUE',
            payload: true
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        dispatch({
            type: 'GET_SINGLE_USER',
            payload: data
        })
        dispatch({
            type: 'SET_LOADING_FALSE',
            payload: false
        })
    }

    const getRepos = async(login) => {
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })


        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
        console.log(data)
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }



    return(
        <gitHubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            all: state.all,
            repos: state.repos,
            fetchUsers,
            getUser,
            clearUsers,
            getRepos
        }}>
            {children}
        </gitHubContext.Provider>
    )
}

export default gitHubContext