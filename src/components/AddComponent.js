import React from "react";

const AddComponent = ({paramA, paramB, paramAchanged, paramBchanged}) =>
    <div>
        <input
            onChange={event => paramAchanged(event.target.value)}
            value={paramA}/>
        +
        <input
            onChange={event => paramBchanged(event.target.value)}            value={paramB}/>
        =
        {paramA + paramB}
    </div>

export default AddComponent