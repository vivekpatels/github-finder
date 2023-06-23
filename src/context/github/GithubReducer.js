const githubReducer = (state, action) => {      // action contains payload and man=y contain multiple payload so switch is preferred over if-else
    switch(action.type) {

        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        // case 'GET_USER':
        //     return {
        //         ...state,
        //          user: action.payload,
        //         loading: false
        //     }
        // case 'GET_REPOS':
        //         return {
        //             ...state,
        //              repos: action.payload,
        //             loading: false
        //         }

         case 'GET_USER_AND_REPOS':
            return {
                ...state,
                 user: action.payload.user,
                 repos: action.payload.repos,
                loading: false
            }
            
                
        case 'SET_LOADING':
            return {
            ...state,
            loading: true

        }

        case 'CLEAR_USERS': 
            return {
                ...state,
                users: []
            }

        default:
            return state                    //in case of default just return its state
    }
}

export default githubReducer