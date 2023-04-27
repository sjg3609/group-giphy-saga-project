import { useDispatch } from "react-redux";
import { useState } from "react";

function SearchImage({gif}) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);

    const toggleFavorite = (event) => {
        setStatus(!status);
        if(status === true) {
            const action = {type: 'SET_GIF_FAVORITE', payload: event.target.src};
            dispatch(action);
        }
    }

    return(
        <>
            <img onClick={toggleFavorite} src={gif.images.fixed_height.url} />
        </>
    );
}

export default SearchImage;