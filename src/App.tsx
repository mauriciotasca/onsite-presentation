import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRaw from "./components/Movie/MovieRaw";
import MovieWithQuery from "./components/Movie/MovieWithQuery";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
    const queryClient = new QueryClient();


    return (
        <QueryClientProvider client={queryClient}>
            <div className="bg-gray-800 min-h-screen h-screen flex flex-col items-center">
                <div className="divide my-8"/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/episodes/detail/:episodeId" element={<EpisodeDetails/>}/>
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
