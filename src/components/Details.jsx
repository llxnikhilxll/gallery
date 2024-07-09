import { useLocation, useNavigate, useParams } from "react-router-dom"

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
  return (
    <div>
        <h1>Details</h1>
        <h1>Book id : {id}</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Details