import React from "react";

const InputLabel = ({forInput, labelText}) => {
    return (
        <label htmlFor={forInput}>
            {labelText}
        </label>
    )
}

export default InputLabel;