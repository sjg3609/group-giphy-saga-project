import { useDispatch } from "react-redux";

function FavoriteItem({favorite}) {
    const dispatch = useDispatch();

    const changeCategory = (event) => {
        event.preventDefault();
        const categoryName = event.target.firstElementChild.value;
        console.log(categoryName);
        let categoryId = 0;
        if(categoryName === 'Funny') {
            categoryId = 1;
        } else if(categoryName === 'Cohort') {
            categoryId = 2;
        } else if(categoryName === 'Cartoon') {
            categoryId = 3;
        } else if(categoryName === 'Nsfw') {
            categoryId = 4;
        } else if(categoryName === 'Meme') {
            categoryId = 5;
        } 
        const action = { type: 'PUT_NEW_CATEGORY', payload: { category: categoryId, id: favorite.id }};
        dispatch(action);
    }

    return(
        <div>
            <img src={favorite.url} />
            <h5>Category: {favorite.name}</h5>
            <p>Change Category: 
                <form onSubmit={changeCategory}>
                    <select id='category'>
                        <option>Funny</option>
                        <option>Cohort</option>
                        <option>Cartoon</option>
                        <option>Nsfw</option>
                        <option>Meme</option>
                    </select>
                    <input type='submit' />
                </form>
            </p>
        </div>
    );
}

export default FavoriteItem;