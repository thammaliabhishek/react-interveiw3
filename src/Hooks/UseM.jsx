import React,{useState,useMemo,useCallback} from 'react'

const UseM = () => {
    const [val,setVal] = useState(0);
    const [item,setItem] =useState(1);

    const memoHook = useMemo(function countMemo(){
        console.log("memo hook");
        return val;
    },[item]);

    const callbackHook = useCallback(function countMemo(){
        console.log("callback");
        return val+2;
    },[val]);

  return (
    <div>
          <h1>UseMemo Hook</h1>
         <h2>Value: {val}</h2>
         <h2>Items: {item} </h2>
         <h3>{memoHook}</h3>
         <h3>{callbackHook}</h3>
         <button className='btn btn-primary' onClick={()=>setVal(val+1)}>Click Me</button>
         <button className='btn btn-dark m-2' onClick={()=>setItem(item*2)}>Click Me</button>

    </div>
  )
}

export default UseM