import React, {useEffect, useMemo, useState} from 'react';
import MovieWithQuery from "../components/Movie/MovieWithQuery";
import {Link, useParams} from "react-router-dom";
import {romanize, useMovieById} from "../utils/utils";
import MovieRaw from "../components/Movie/MovieRaw";

const EpisodeDetails = () => {
    const params = useParams();

    const {data, isLoading} = useMovieById(Number(params?.episodeId));

    // const [data, setData] = useState<any>({})

    // useEffect(() => {
    //     fetch(`https://swapi.dev/api/films/${Number(params?.episodeId)}`).then((res) => {
    //         res.json().then((parsed)=>{
    //             setData(parsed)
    //         })
    //     })
    // }, [])

    return (
        <div className="flex w-full gap-4 justify-center container flex-col">
          <Link className="text-slate-300 2xl hover:underline" to={'/'}>⬅️ Back</Link>
          <h2 className="text-3xl text-amber-300">EPISODE: {romanize(Number(params?.episodeId))}</h2>
            <MovieWithQuery episodeId={Number(params?.episodeId)} isDetailPage />
            {/*<MovieRaw episodeId={Number(params?.episodeId)} isDetailPage />*/}

            {/*@ts-ignore*/}
            {useMemo(()=><marquee direction="up" className="text-amber-300 text-6xl h-[300px] mt-8" scrolldelay={200} >{data?.opening_crawl}</marquee>, [data])}
        </div>
    );
};

export default EpisodeDetails;