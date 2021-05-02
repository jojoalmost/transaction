import React, {FC, useState} from "react";

interface SelectOptions {
    value: string;
    label: string;
}

interface InterfaceProps {
    onChange: (value: string) => void
}

const Sort: FC<InterfaceProps> = ({onChange}) => {
    const [sortBy, setSortBy] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {target: {value}} = event;
        setSortBy(value);
        onChange(value);
    }
    return (
        <select name="sort" id="sort" onChange={handleChange} placeholder="Urutkan" value={sortBy}>
            <option value="" disabled>Urutkan</option>
            <option value="name-asc">Nama A-Z</option>
            <option value="name-desc">Nama A-Z</option>
            <option value="date-desc">Tanggal terbaru</option>
            <option value="date-asc">Tanggal terlama</option>
        </select>
    )
}

export default Sort;