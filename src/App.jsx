import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"
import axios from "./util/axios.custiomize"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    const fetchHelloWorld = async() =>{
      const res = await axios.get(`/v1/api`)
      console.log("check res:", res)
    }
    fetchHelloWorld()
  })

  return (
   <div>
    <Header/>
    <Outlet/>
   </div>
   
  )
}

export default App
