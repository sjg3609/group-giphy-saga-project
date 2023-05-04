import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

    return(
        <div>
            <h3>Favorite Gifs:</h3>
            <button onClick={goBack}>Go Back</button>
            <br />
            <br />
            {
                favorites.map((favorite) => (
                    <FavoriteItem 
                    key = { favorite.id }
                    favorite = { favorite }
                    />
                ))
            }
        </div>
    );
}

export default FavoriteList;