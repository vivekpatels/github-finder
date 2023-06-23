import UserResult from "../components/users/UserResult"
import UserSearch from "../components/users/UserSearch"

function Home() {
    // console.log(process.env.REACT_APP_GITHUB_TOKEN);
    // console.log(process.env.REACT_APP_GITHUB_API_ENDPOINT);

  return (
    <>
       {/* <h1 className="text-6xl">Welcome</h1> */}
        {/* <p>{process.env.REACT_APP_GITHUB_API_ENDPOINT}</p> */}
       <UserSearch />
       <UserResult />
    </>
  )
}

export default Home