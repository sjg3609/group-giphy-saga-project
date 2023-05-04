function FavoriteItem({favorite}) {
    return(
        <div>
            <img src={favorite.url} />
            <h5>Category: {favorite.name}</h5>
        </div>
    );
}

export default FavoriteItem;