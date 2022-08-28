import React from "react";
import {TextField} from "@mui/material";

interface Props {
    searchValue: string
    setSearchValue: (string: string) => void
}

const SearchForm = ({ searchValue, setSearchValue }: Props) => {
    const findContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <TextField
            type="text"
            value={searchValue}
            onChange={findContact}
            label="Поиск контакта"
            variant="outlined"
        />
    );
};

export default SearchForm;