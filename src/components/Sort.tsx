import React, {FC, useState} from "react";

interface InterfaceProps {
    onChange: (value: string) => void
    value: string
}

const Sort: FC<InterfaceProps> = ({onChange, value = ""}) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {target: {value}} = event;
        onChange(value);
    }
    return (
        <div>
            <select
                name="sort"
                id="sort"
                onChange={handleChange}
                placeholder="Urutkan"
                value={value}
            >
                <option value="" disabled>Urutkan</option>
                <option value="name-asc">Nama A-Z</option>
                <option value="name-desc">Nama Z-A</option>
                <option value="date-desc">Tanggal terbaru</option>
                <option value="date-asc">Tanggal terlama</option>
            </select>
        </div>
    )
}

export default Sort;
