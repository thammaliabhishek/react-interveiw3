import React, { useReducer } from 'react'

const UseR = () => {

    const initial =""
    const reducer = (state, action) => {
        switch (action) {
            case "add": return "HIπββοΈ";
            case "sub": return "HELLOπ₯³π₯³";
            case "reset": return 0;
            default: return "please Enter ππ";
        }
    }
    const [value, dispatch] = useReducer(reducer, initial)

    return (
        <div>
            <h2>{value}</h2>

            <button className="btn btn-warning m-2" onClick={() => dispatch("add")}>Clickπ₯π₯</button>
            <button className="btn btn-danger m-2" onClick={() => dispatch("sub")}>πββοΈπββοΈ</button>
            <button className="btn btn-dark m-2" onClick={() => dispatch("reset")}>βββ</button>

        </div>
    )
}

export default UseR