import React, {FC} from "react";
import {ReactComponent as Loupe} from '../assets/loupe.svg'

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
            <span style={{paddingRight: 16}}>
                <Loupe width={16} height={16} fill="#dddddd"/>
            </span>
            <input
                type="text"
                name="search"
                onChange={handleChange}
                placeholder="Cari nama bank"
                value={value}
            />
        </div>
    )
}

export default Search;
