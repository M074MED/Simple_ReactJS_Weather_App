import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.gitWeather}>
            <input type="text" name="country" placeholder="Country..." />
            <input type="text" name="city" placeholder="City..." />
            <button>Git Weather</button>
        </form>
    )
}

export default Form;
