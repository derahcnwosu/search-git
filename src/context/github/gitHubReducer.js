const gitHubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS': return {
            ...state,
            users: action.payload
        }
        case 'SET_LOADING_FALSE': return {
            ...state,
            loading: action.payload
        }
        case 'SET_LOADING_TRUE': return {
            ...state,
            loading: action.payload
        }
        case 'GET_SINGLE_USER': return {
            ...state,
            user: action.payload
        }
        case 'GET_REPOS': return {
            ...state,
            repos: action.payload,
        }
        case 'CLEAR_USERS': return {
            ...state,
            users: []
        }
        default: return state
    }
}

export default gitHubReducer