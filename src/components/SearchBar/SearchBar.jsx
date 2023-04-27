import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function SearchBar() {
    const dispatch = useDispatch();
    const [searchGif, setSearchGif] = useState('');
    const [gifList, setGifList] = useState([]); 

    const handleChange = (e) => {
        e.preventDefault();
        setSearchGif(e.target.value);
    }
    
    // if (searchGif.length > 0) {
    //     const action = { type: 'SET_GIF_SEARCH', payload: searchGif }
    //     dispatch(action);
    // }

    const search = () => {
        // const action = { type: 'SET_GIF_SEARCH', payload: searchGif }
        // dispatch(action);
        axios.get(`/api/search/${searchGif}`).then((response) => {
            console.log(response.data);
            setGifList(response.data.data);
        }).catch((error) => {
            console.log(error);
            alert('something went wrong');
        })
    }

    const toggleFavorite = (event) => {
        console.log(event.target.src);
        const action = {type: 'SET_GIF_FAVORITE', payload: event.target.src};
        dispatch(action);
    }

    useEffect(() => {
        // search();
    }, []);

    return (
        <>
            <input type="text" placeholder="Search Gifs" value={searchGif} onChange={handleChange}/>
            <button onClick={search}>Search</button>
            <div>
                {
                    gifList.map((gif, i) => (
                        <img onClick={toggleFavorite} key={i} src={gif.images.fixed_height.url} />
                    ))
                }
            </div>
        </>
    )
}

export default SearchBar;