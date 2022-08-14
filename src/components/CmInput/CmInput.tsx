import React from 'react';
import TextField from "@mui/material/TextField";

type Props = {
    label: string,
    id: string,
    name: string,
    value: string,
    onChange: (newValue: string, name: string) => void
};

const CmInput = ({ label, id, name, value, onChange }: Props) => {

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue, name);
    }

    return (
        <div>
            <TextField label={label} id={id} name={name} value={value} variant="standard" onChange={_onChange} />
        </div>
    );
};

export default CmInput;
