import React from 'react'
import TextField from '@mui/material/TextField';
import MyButton from '../MyButton/MyButton';
import CustomTextField from '../Field/Field';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const MyForm = (props) => {
    const methods = useForm({ mode: 'onBlur' });
    const { handleSubmit } = methods;


    const onSubmit = (data) => {
        console.log('data:', data);
    };

    const onError = (errors) => {
        console.log('errors:', errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormProvider {...methods}>
                {/* <TextField label="Full Name" variant="outlined" size='small' {...register("example")} />
                <TextField label="Email" variant="outlined" size='small' {...register("emailRequired")} /> */}
                <CustomTextField name="test" />
                <MyButton label="Submit With MyButton 😄" onClick={handleSubmit(onSubmit, onError)} />
            </FormProvider>
        </form>
    );
};

export default MyForm;