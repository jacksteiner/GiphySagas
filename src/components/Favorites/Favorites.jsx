import axios from 'axios';
import {useEffect, useState} from 'react';

const Favorites = () => {
    const [gifList, setGifList] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        axios.get('/api/favorite').then((response) => {
            setGifList(response.data);
            console.log('THE GIFLIST IS:', gifList);
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong in fetchFavorites');
        });
    }

    return(
        <div>
        <h1>Favorites</h1>
        {
         gifList.map(gif => {
           return(
                <div>
                    <img src={gif.gif_url}/>
                    <br/>
                </div>
            )
        })
    }
   </div>
    )
}

export default Favorites;