import axios from 'axios';
import {useEffect, useState} from 'react';


const Search = () => {
    const [results, setResults] = useState([]); // show the gifs 
    const [string, setString] = useState('dog');
    
    
    const findGifs = () => {
        console.log('in find gifs', string);
        axios.get(`/api/search/${string}`)
        .then(response => {
            console.log('THE DATA IS', response.data.data)
            setResults(response.data.data)
            // console.log('THE RESULTS ARE', results[0].images.downsized_medium.url);
            // console.log('THE URL IS:', results[0].data.images.downsized_medium.url)
            // setString('');
        })
        .catch(error => {
            console.log(error);
            alert('something wrong in the find gifs');
        })
    }
    
    useEffect(() => {
        console.log('page load'); 
        findGifs();   
    }, []);



    return(
    <>
    <p> Results Go Here</p>
    <input value={string} onChange={(e) =>setString(e.target.value)}></input>
    <br></br>
    <button onClick={findGifs}>Submit</button>
    {
        results.map (searchResult => {
            return <img src={searchResult.images.downsized_medium.url}/>
        })
    }
    
    </>
    )
}

export default Search;