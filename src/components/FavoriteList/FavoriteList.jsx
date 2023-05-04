import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Container, Button } from '@mui/material';
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const favorites = useSelector(store => store.favList);

    useEffect(() => {
        dispatch({ type: 'FETCH_GIF_FAVORITES' });
    }, []);

    const goBack = () => {
        history.goBack('/');
    }

    return (
        <div>
            <h3>Favorite Gifs:</h3>

            <br />
            <br />
            <Container fixed>
                <Grid container spacing={1}>
                    {
                        favorites.map((favorite) => (
                            <FavoriteItem
                                key={favorite.id}
                                favorite={favorite}
                            />
                        ))
                    }
                </Grid>
            </Container>

            <Button variant="contained" onClick={goBack}>Go Back</Button>
        </div>
    );
}

export default FavoriteList;