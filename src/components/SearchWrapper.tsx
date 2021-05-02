import React, {FC} from "react";
import Search from "./Search";
import Sort from "./Sort";

interface InterfaceProps {
    onChangeSort: (value: string) => void
    onChangeSearch: (value: string) => void
    filterValue: string
    sortValue: string
}

const SearchWrapper: FC<InterfaceProps> = ({onChangeSort, onChangeSearch, filterValue = '', sortValue = ''}) => {
    return (
        <div className="form-search">
            <Search onChange={onChangeSearch} value={filterValue}/>
            <Sort onChange={onChangeSort} value={sortValue}/>
        </div>
    )
}

export default SearchWrapper;