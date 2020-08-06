import React from 'react';
import { Card, CardHeader, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
    }
}));


const MovieCard = ({ title, imdbID, year, poster, type, showDetail, activeModal }) => {
    const classes = useStyles();

    const openModal = () => {
        activeModal(true);
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
            <Card style={{ width: '350px', height: '400px' }} className={classes.root}
                onClick={() => openModal()}>
                <Typography variant="p">{year}</Typography>
                <CardHeader title={title}
                    subheader={type}
                />
                <img src={poster} alt={title} />
            </Card>
        </div>
    )
}

export default MovieCard;