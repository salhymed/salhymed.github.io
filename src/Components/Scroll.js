import React from "react";

const Scroll = (props) =>{
    return (
        <div style = {{ 'overflow-y': 'scroll','border': '1px solid gray','height':'500px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;