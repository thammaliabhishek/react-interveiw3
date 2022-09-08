import React,{useState} from 'react'

const UseSt = () => {
  const [set,setName]=useState(0)
  return(
    <div>
     <h1>{set}</h1>
          

          <button className='btn btn-dark' onClick={()=>setName(set+1)}>click</button>
    </div>
  )
}

export default UseSt