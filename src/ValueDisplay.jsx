import React from 'react';
import {connect} from "react-redux";

const ValueDisplay = ({value, children}) => {
    return <>
        Value is: {value}
        <br/>
        {children}
    </>
};

export default connect(
    state => ({
        value: state.value,
    })
)(ValueDisplay);