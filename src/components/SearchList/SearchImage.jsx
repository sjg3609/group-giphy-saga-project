import { useDispatch } from "react-redux";
import { useState } from "react";
import { Box, Grid, Card, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

function SearchImage({ gif }) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);

    const toggleFavorite = (event) => {
        setStatus(!status);
        if (status === true) {
            const action = { type: 'SET_GIF_FAVORITE', payload: event.target.src };
            dispatch(action);
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ md: 3 }} >
                   <Item md={3}>
                        <img onClick={toggleFavorite} src={gif.images.fixed_height.url} />
                    </Item> 
            </Grid>
        </Box>
            
        </>
    );
}

export default SearchImage;