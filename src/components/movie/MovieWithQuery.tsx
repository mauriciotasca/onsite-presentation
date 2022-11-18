import React, {useEffect, useState} from 'react';
import {romanize, useFirstMovie} from "../../utils/utils";

const MovieWithQuery = () => {
    const {data, isLoading} = useFirstMovie()

    return (
        <div className="bg-slate-200 w-1/3 h-48 rounded-sm flex items-center justify-center text-2xl p-4">
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
            </ul>
        </div>
    );
};

export default MovieWithQuery;