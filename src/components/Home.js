import React, { useState, useEffect } from 'react';

//Components
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';
import Detail from './Detail';

import { Modal } from 'antd';
import { Button } from '@material-ui/core';

const Home = () => {
    //State section
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('lord of the rings');
    const [sortDown, setSortDown] = useState(false);
    const [detail, setDetail] = useState(false);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(null);

    //URL
    let url = `http://www.omdbapi.com/?apikey=e33fe7f5&r=json&s=${search}`;
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(result => {
                console.log(result)
                if (result.Response === "False") {
                    setError(result.Error)
                } else {
                    setMovies(result.Search)
                }
            })
            .catch(({ message }) => {
                setError(message);
            })

    }, [search])

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
                <SearchBox searchMovie={setSearch} />
            </div>
            <Button style={{ textAlign: 'center', marginLeft: '60px', color: 'black' }} onClick={sortMovies} variant="contained">sort by year</Button>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>
                {
                    movies !== null && movies.length > 0 && movies.map((result) => (
                        <MovieCard
                            key={result.imdbID}
                            imdbID={result.imdbID}
                            Title={result.Title}
                            Year={result.Year}
                            Poster={result.Poster}
                            Type={result.Type}
                            showDetail={setDetail}
                            modal={setModal}
                        />
                    ))
                }
            </div>

            <Modal
                title='Detail'
                centered
                visible={modal}
                onCancel={() => setModal(false)}
                footer={null}
                width={800}
            >
                <Detail {...detail} />
            </Modal>
        </div >
    )
}

export default Home;