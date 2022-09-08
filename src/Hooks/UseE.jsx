import React,{useState,useEffect} from 'react'

const UseE = () => {
    const [inc,setInc]=useState(0)

    useEffect(()=>{
        setInterval(() => {
              setInc(inc+1)
              console.log("hi")
        }, 5000);
    },[inc])


  return (
    <div>
        <h1>{inc}</h1>
    </div>
  )
}

export default UseE