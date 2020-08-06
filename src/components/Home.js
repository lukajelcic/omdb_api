import React, { useState, useEffect } from 'react';

//Components
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';
import Detail from './Detail';

import { Modal } from 'antd';
import { Button } from '@material-ui/core';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState('lord of the rings');
    const [error, setError] = useState(null);
    const [activateModal, setActivateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [sortDown, setSortDown] = useState(false);


    //URL
    let url = `http://www.omdbapi.com/?apikey=e33fe7f5&r=json&s=${movie}`;


    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(response => {
                console.log(response)
                if (response.Response === "False") {
                    setError(response.Error)
                } else {
                    setMovies(response.Search)
                }
            })
            .catch(({ message }) => {
                setError(message);
            })

    }, [movie])

    //Sort Movies by Year
    const sortMovies = () => {
        const sorted = [...movies];
        if (sortDown) {
            sorted.sort((a, b) => {
                return b.Year - a.Year;
            })
        } else {
            sorted.sort((a, b) => {
                return a.Year - b.Year
            })
        }
        setSortDown((prev) => !prev);
        setMovies(sorted)
    }

    return (
        <div>
            <div style={{ padding: '20px' }} >
                <Button onClick={sortMovies} variant="outlined">sort by year</Button>
                <SearchBox searchHandler={setMovie} />

            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>
                {
                    movies !== null && movies.length > 0 && movies.map((result) => (
                        <MovieCard
                            key={result.imdbID}
                            imdbID={result.imdbID}
                            title={result.Title}
                            year={result.Year}
                            poster={result.Poster}
                            type={result.Type}
                            showDetail={setShowDetail}
                            activeModal={setActivateModal}
                        />
                    ))
                }
            </div>

            <Modal
                title='Detail'
                centered
                visible={activateModal}
                onCancel={() => setActivateModal(false)}
                footer={null}
                width={800}
            >
                <Detail {...detail} />
            </Modal>
        </div >
    )
}

export default Home;