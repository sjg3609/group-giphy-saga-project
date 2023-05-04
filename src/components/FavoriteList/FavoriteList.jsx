import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from './FavoriteItem';

function FavoriteList() {
    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favList);

    useEffect(() => {
        dispatch({ type: 'FETCH_GIF_FAVORITES' });
    }, []);

    return(
        <div>
            <h3>Favorite Gifs:</h3>
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