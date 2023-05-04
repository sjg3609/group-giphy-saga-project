import { useDispatch } from "react-redux";
import { Grid, Paper, Button, FormControl, Select, MenuItem } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

function FavoriteItem({ favorite }) {
    const dispatch = useDispatch();

    const changeCategory = (event) => {
        event.preventDefault();
        const categoryName = event.target.firstElementChild.value;
        console.log(categoryName);
        let categoryId = 0;
        if (categoryName === 'Funny') {
            categoryId = 1;
        } else if (categoryName === 'Cohort') {
            categoryId = 2;
        } else if (categoryName === 'Cartoon') {
            categoryId = 3;
        } else if (categoryName === 'Nsfw') {
            categoryId = 4;
        } else if (categoryName === 'Meme') {
            categoryId = 5;
        }
        const action = { type: 'PUT_NEW_CATEGORY', payload: { category: categoryId, id: favorite.id } };
        dispatch(action);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#423E3D',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid item md={12}>
                <Item>
                    <img src={favorite.url} />
                </Item>
            </Grid>

            <h4>Category: {favorite.name}</h4>
            <p>Change Category:
                <FormControl onSubmit={changeCategory} sx={{m: 1, minWidth: 120}} size="small">
                    <Select id='category'>
                        <MenuItem>Funny</MenuItem>
                        <MenuItem>Cohort</MenuItem>
                        <MenuItem>Cartoon</MenuItem>
                        <MenuItem>Nsfw</MenuItem>
                        <MenuItem>Meme</MenuItem>
                    </Select>
                    <Button variant="contained" size="small" type='submit'>Submit</Button>
                </FormControl>
            </p>
        </div>
    );
}

export default FavoriteItem;