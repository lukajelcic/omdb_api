import React from 'react';
import { Card, CardHeader, Typography } from '@material-ui/core';

const MovieCard = ({ Title, imdbID, Year, Poster, Type, showDetail, modal }) => {
    const openModal = () => {
        modal(true);
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=e33fe7f5`)
            .then(res => res.json())
            .then(response => {
                showDetail(response);
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={{ flex: '0', margin: '50px', textAlign: 'center' }}>
            <Card style={{ width: '350px', height: '400px' }}
                onClick={() => openModal()}>
                <Typography variant="p">{Year}</Typography>
                <CardHeader title={Title}
                    subheader={Type}
                />
                <img src={Poster} alt={Title} />
            </Card>
        </div>
    )
}

export default MovieCard;