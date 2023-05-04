import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';


function SearchBar() {
    const dispatch = useDispatch();
    const [searchGif, setSearchGif] = useState('');
     

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
        <Box sx={{ maxWidth: '90%' }}>
            <TextField  fullWidth margin="normal" variant="standard" type="text" placeholder="Search Gifs" value={searchGif} onChange={handleChange}/>
            <Button variant="contained" onClick={search}>Search</Button>
        </Box>
            
            
        </>
    )
}

export default SearchBar;