import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function EpisodesList () {
    const[episodes, setEpisodes] = useState([]);

    useEffect( () => {
        axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(result => {
                console.log("episodes:", result.data.results);
                setEpisodes(result.data.results);
            })
            .catch(error => {
                console.log(error)
            });
            }, []);
    
    return (
        <section className="episode-list grid-view">
            {episodes.map(episode => {
                return <EpisodeCard key={episode.id} episode={episode} />
            })}
        </section>
    )



    }
