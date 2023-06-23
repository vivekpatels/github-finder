import axios from "axios"


const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_API_ENDPOINT,
    headers: {Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`}
})


        //Search Users

     export   const searchUsers = async (text) => {
            // setLoading()

            const params = new URLSearchParams({
                q: text
            })

            // const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/search/users?${params}`, {
            //     headers: {
            //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            //     }
            // })

            // const {items} = await response.json()

            // // dispatch({
            // //     type: 'GET_USERS',
            // //     payload: items
            // // })

            // return items;

            const response = await github.get(`/search/users?${params}`)
            return response.data.items
         
        }

    // export  const getUser = async (login) => {
    //         // setLoading()

    

    //         const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/users/${login}`, {
    //             headers: {
    //                 Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //             }
    //         })

    //         if(response.status === 404) {
    //             window.location = '/notfound'
    //         } else{
    //             console.log("inside here");
    //             const data = await response.json()
    //             // console.log(data);
    
    //             // dispatch({
    //             //     type: 'GET_USER',
    //             //     payload: data
    //             // })

    //             return data;
    //         }


         
    //     }

    //     //Get user and repos

    //   export   const getUserAndRepos = async (login) => {
    //         const response = await fetch(`${process.env.REACT_APP_GITHUB_API_ENDPOINT}/users/${login}/repos`, {
    //             headers: {
    //                 Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //             }
    //         })

    //         if(response.status === 404) {
    //             window.location = '/notfound'
    //         } else{
    //             // console.log("inside here");
    //             const data = await response.json()
    //             // console.log(data);
    
    //         //     dispatch({
    //         //         type: 'GET_REPOS',
    //         //         payload: data
    //         //     })
    //         return data;
    //         }

         
    //     }


    //Get user and repos

    export const getUserAndRepos = async(login) => {
        const [user, repos] = await Promise.all([
            github.get(`/users/${login}`),
            github.get(`/users/${login}/repos`)
        ])

        return {user: user.data, repos: repos.data}
    }