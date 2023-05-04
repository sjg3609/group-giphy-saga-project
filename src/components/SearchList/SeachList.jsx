import SearchImage from "./SearchImage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Container, Box } from '@mui/material';

function SearchList() {
    const gifList = useSelector(store => store.searchList);

    return (
        <div>
            <Box >
                {
                    gifList.map((gif, i) => (
                        <SearchImage key={i}
                            gif={gif}
                        />
                    ))
                }
            </Box>

        </div>
    )
}

export default SearchList;