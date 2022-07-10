import React from "react";
import Button from '@mui/material/Button';

const MyButton = (props) => {
    return <Button variant="contained" {...props}>{props.label}</Button>;
};

export default MyButton;