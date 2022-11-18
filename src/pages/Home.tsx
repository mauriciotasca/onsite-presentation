import React from 'react';
import MovieWithQuery from "../components/Movie/MovieWithQuery";
import MovieRaw from "../components/Movie/MovieRaw";

const Home = () => {
    const episodes = [1, 2, 3, 4, 5, 6];
    return (
        <div className="flex w-full gap-4 justify-center container flex-wrap">
            {/*{episodes?.map((i)=><MovieRaw episodeId={i}/>)}*/}
            {episodes?.map((i) => <MovieWithQuery episodeId={i}/>)}
        </div>
    );
};

export default Home;