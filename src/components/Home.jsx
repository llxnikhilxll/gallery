import React, { useEffect, useState } from "react"
import axios from "../helpers/axios"


const Home = () => {

    const getUser = async () => {
        try {
            const { data } = await axios.get("/users")
            setusers(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const [users, setusers] = useState([])
    let render = 'Loading...'
    if (users.length > 0) {
        render = users.map((user) => {
            return <div key={user.id}>
                <div className="bg-red-100  w-fit rounded p-4 ">
                    <h1>{user.name}</h1><h3>{user.email}</h3>
                </div>
            </div>
        })
    }

  return (
    <div>
        <div>
              <div className="font-sans flex flex-wrap gap-2 p-2">
                  {render}
              </div>
        </div>
    </div>
    
  )
}

export default Home