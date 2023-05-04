import SearchImage from "./SearchImage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Container } from '@mui/material';

function SearchList() {
    const gifList = useSelector(store => store.searchList);

    return (
        <div>
            <Container fixed >
                {
                    gifList.map((gif, i) => (
                        <SearchImage key={i}
                            gif={gif}
                        />
                    ))
                }
            </Container>

        </div>
    )
}

export default SearchList;