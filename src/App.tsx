import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRaw from "./components/movie/MovieRaw";
import MovieWithQuery from "./components/movie/MovieWithQuery";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="bg-gray-800 min-h-screen h-screen flex flex-col items-center">
                <div className="divide my-8"/>

                <div className="flex w-full gap-4 justify-center container">
                    {/*<MovieRaw />*/}
                    {/*<MovieRaw />*/}
                    {/*<MovieRaw />*/}
                    <MovieWithQuery/>
                    <MovieWithQuery/>
                    <MovieWithQuery/>

                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
