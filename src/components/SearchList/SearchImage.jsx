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
        backgroundColor: theme.palette.mode ===  '#423E3D',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Item>
                        <img onClick={toggleFavorite} src={gif.images.fixed_height.url} />
                    </Item> 
            </Grid>
        </Box>
            
        </>
    );
}

export default SearchImage;