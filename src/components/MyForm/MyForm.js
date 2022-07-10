import React from 'react'
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import MyButton from '../MyButton';

const MyForm = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <TextField label="Full Name" variant="outlined" size='small' {...register("example")} />
            <TextField label="Email" variant="outlined" size='small' {...register("emailRequired")} />

            <MyButton label="Submit With MyButton 😄" onClick={handleSubmit(props.onSubmit)} />
        </form>
    );
};

export default MyForm;