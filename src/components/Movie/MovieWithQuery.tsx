import React, {useEffect, useState} from 'react';
import {romanize, useMovieById} from "../../utils/utils";
import {Link} from "react-router-dom";

const MovieWithQuery = ({episodeId, isDetailPage=false}:{episodeId:number, isDetailPage?: boolean}) => {
    const {data, isLoading} = useMovieById(episodeId)
    return (
        <div className="bg-slate-200 w-1/3 h-48 rounded-sm flex items-center justify-center text-lg p-3">
            <ul className="w-full">
                <li className="flex w-full justify-between">
                    <span className="font-semibold">EPISODE:</span> <span>{romanize(data?.episode_id!)}</span>
                </li>
                <li className="flex w-full justify-between">
                    <span className="font-semibold">Title:</span> <span>{data?.title!}</span>
                </li>
                <li className="flex w-full justify-between">
                    <span className="font-semibold">Director:</span> <span>{data?.director!}</span>
                </li>
                <li className="flex w-full justify-between">
                    <span className="font-semibold">Release Date:</span> <span>{data?.release_date?.split('-')[0]!}</span>
                </li>

                {!isDetailPage &&  <li className="flex w-full justify-between mt-6 underline">
                    <span className="font-semibold">&nbsp;</span> <Link to={`/episodes/detail/${episodeId}`}>See Details</Link>
                </li>}
            </ul>
        </div>
    );
};

export default MovieWithQuery;