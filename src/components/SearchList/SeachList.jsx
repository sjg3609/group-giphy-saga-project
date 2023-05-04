import SearchImage from "./SearchImage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Container, Box } from '@mui/material';

function SearchList() {
    const gifList = useSelector(store => store.searchList);

    return (
        <div>
            <Container maxWidth="md" >
                <Grid container spacing={2} >
                    {
                        gifList.map((gif, i) => (
                            <SearchImage key={i}
                                gif={gif}
                            />
                        ))
                    }
                </Grid>

            </Container>

        </div>
    )
}

export default SearchList;