import React, { useReducer } from 'react'

const UseR = () => {

    const initial =""
    const reducer = (state, action) => {
        switch (action) {
            case "add": return "HI🙋‍♂️";
            case "sub": return "HELLO🥳🥳";
            case "reset": return 0;
            default: return "please Enter 👉👉";
        }
    }
    const [value, dispatch] = useReducer(reducer, initial)

    return (
        <div>
            <h2>{value}</h2>

            <button className="btn btn-warning m-2" onClick={() => dispatch("add")}>Click🔥🔥</button>
            <button className="btn btn-danger m-2" onClick={() => dispatch("sub")}>🙋‍♂️🙋‍♂️</button>
            <button className="btn btn-dark m-2" onClick={() => dispatch("reset")}>❌❌❌</button>

        </div>
    )
}

export default UseR