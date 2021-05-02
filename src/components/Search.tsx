import React, {FC} from "react";

interface InterfaceProps {
    onChange: (value: string) => void
    value: string | number
}

const Search: FC<InterfaceProps> = ({onChange, value}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        onChange(value);
    }
    return (
        <div>
            <span>Search</span>
            <input type="text" name="search" onChange={handleChange} placeholder="Cari nama bank" value={value}/>
        </div>
    )
}

export default Search;