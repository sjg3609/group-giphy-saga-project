import SearchImage from "./SearchImage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SearchList() {
    const gifList = useSelector(store => store.searchList);

    return(
        <div>
            {
                gifList.map((gif, i) => (
                    <SearchImage key={i}
                        gif = {gif}
                    />
                ))
            }
        </div>
    )
}

export default SearchList;