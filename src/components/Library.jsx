import { Link,Outlet } from "react-router-dom"
import axios from "../helpers/axios"

const Library = () => {
  const getPost = async () => {
    try {
      const { data } = await axios.get("/posts")
      console.log(data);
      const posts = { data: data}
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    
    <div className="h-[100vh] w-[screen]">
        <h1>Library</h1>
        <button onClick={getPost}>Posts</button>
        <ul>
            <li>
                <Link to="/Library/1">Book 1</Link>
            </li>
            <li>
                <Link to="/Library/2">Book 2</Link>
            </li>
            <li>
                <Link to="/Library/3">Book 3</Link>
            </li>
        </ul>
          <Outlet />
    </div>
    
  )
}

export default Library