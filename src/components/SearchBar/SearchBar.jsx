import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    const [searchGif, setSearchGif] = useState('');
    const gifList = useSelector(store => store.gifList); 

    const handleChange = (e) => {
        e.preventDefault();
        setSearchGif(e.target.value);
    }
    
    // if (searchGif.length > 0) {
    //     const action = { type: 'SET_GIF_SEARCH', payload: searchGif }
    //     dispatch(action);
    // }

    const search = () => {
        const action = { type: 'SET_GIF_SEARCH', payload: searchGif }
        dispatch(action);
    }

    useEffect(() => {
        // search();
    }, []);

    return (
        <>
            <input type="text" placeholder="Search Gifs" value={searchGif} onChange={handleChange}/>
            <button onClick={search}>Search</button>
        </>
    )
}

export default SearchBar;