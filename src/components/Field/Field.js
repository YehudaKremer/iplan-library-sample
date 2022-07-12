import React from 'react'
import {TextField  } from '@mui/material';
import { useFormContext, useController } from 'react-hook-form';

const CustomTextField = ({ name }) => {
    const { control } = useFormContext();
    const {
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error }
    } = useController({
        control,
        name
    });

   

    return (
        <TextField
            variant='outlined'
            size='small'
            value='gh'
            onChange={onChange}
            onBlur={onBlur}
            name={fieldName}
            error={!!error}
            helperText={error ? error.message : null}
        />
    );
};

export default CustomTextField;