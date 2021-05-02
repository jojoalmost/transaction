import React, {FC} from "react";
import Search from "./Search";
import Sort from "./Sort";

interface InterfaceProps {
    onChangeSort: (value: string) => void
}

const SearchWrapper: FC<InterfaceProps> = ({onChangeSort}) => {
    return (
        <>
            <Search/>
            <Sort onChange={onChangeSort}/>
        </>
    )
}

export default SearchWrapper;