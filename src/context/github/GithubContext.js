import {createContext, useState, useReducer} from 'react'
import githubReducer from './GithubReducer';
// import { searchUsers } from './GithubActions';

const GithubContext = createContext()

// const GITHUB_API_ENDPOINT = process.env.REACT_APP_GITHUB_API_ENDPOINT;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users : [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // get initial users (testing purpose only)
    
    // const fetchUsers = async () => {
    //     setLoading()
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/users`,
    //     {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         },
            
    //     })

    //     const data = await response.json()

        // setUsers(data);
        // setLoading(false);


        //Search Users

        //  const searchUsers = async (text) => {
        //     setLoading()

        //     const params = new URLSearchParams({
        //         q: text
        //     })

        //     const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/search/users?${params}`, {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     })

        //     const {items} = await response.json()

        //     dispatch({
        //         type: 'GET_USERS',
        //         payload: items
        //     })

         
        // }


        //Get Single User
        //  const getUser = async (login) => {
        //     setLoading()

    

        //     const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/users/${login}`, {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     })

        //     if(response.status === 404) {
        //         window.location = '/notfound'
        //     } else{
        //         console.log("inside here");
        //         const data = await response.json()
        //         // console.log(data);
    
        //         dispatch({
        //             type: 'GET_USER',
        //             payload: data
        //         })
        //     }


         
        // }

        // //Get user and repos

        //  const getUserAndRepos = async (login) => {
        //     const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/users/${login}/repos`, {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     })

        //     if(response.status === 404) {
        //         window.location = '/notfound'
        //     } else{
        //         // console.log("inside here");
        //         const data = await response.json()
        //         // console.log(data);
    
        //         dispatch({
        //             type: 'GET_REPOS',
        //             payload: data
        //         })
        //     }


         
        // }
        

        // const clearUsers = () => {
        //     dispatch({
        //         type: 'CLEAR_USERS'
        //     })
        // }
  
         
    
    

    //Set loading

    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        ...state,
        dispatch,

        // users: state.users ,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        // searchUsers,
        // getUser,
        // getUserAndRepos,
        // clearUsers,
        
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext