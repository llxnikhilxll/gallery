import React from "react"
import RouteComponent from "../Routes/RouteComponent"
import Nav from './components/link'
import axios from "./helpers/axios"
import Home from "./components/Home";

const App = () => {

  const getUser = async () => {
    try{
      const { data } = await axios.get("/users")
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="bg-slate-500 w-screen h-[screen]">
      <Nav/>
      <Home/>
      <RouteComponent/>
    </div>
  );
};

export default App ;