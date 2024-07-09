import React, { useEffect, useState } from "react"
import axios from "../helpers/axios"

const Show = () => {

  const [pics,setpics] = useState([])
  const [page,setpage] = useState(1)

  const getPics =async ()=>{
    const {data} = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`)
    setpics(data)
  }

  useEffect(()=>{
    getPics()
    console.log(page);
  },[page])


  let render = "Loading..."

  if(pics.length>0){
    render = pics.map((p)=> {
      return <div className="w-[300px] h-fit p-2 bg-zinc-800  text-semibold" key={p.id}>
        <img className="p-2" src={p.download_url} alt="" />
        <h1 className="text-white">{p.author}</h1>
      </div>
    })
  }

  return (
    <div>
      <div className="flex flex-wrap w-full gap-2">
        {render}
      </div>
    <div className="text-center"> 
      <span className="text-lg text-blue-800 font-medium mr-10 cursor-pointer" onClick={()=>page>1 && setpage(page - 1)}>Prev</span>
        <span className="text-lg text-blue-800 font-medium cursor-pointer" onClick={() => setpage(page + 1)}>Next</span>
    </div>
    </div>
  )
}

export default Show