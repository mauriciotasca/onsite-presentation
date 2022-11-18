import React, {useEffect, useState} from 'react';

const MovieRaw = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch('https://swapi.dev/api/films/1').then((res) => {
            res.json().then((parsed)=>{
                setMovie(parsed)
            })
        })
    }, [])

    return (
        <div style={{width: "100px", height:"100px", background:"black"}}>
            Hello
        </div>
    );
};

export default MovieRaw;