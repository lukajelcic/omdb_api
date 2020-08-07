import React from 'react';
import { Input, Col, } from 'antd';
import { Typography } from '@material-ui/core';

const { Search } = Input;

const SearchBox = ({ searchMovie }) => {
    return (
        <div>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }} color="primary">OMDB</Typography>
            <Col span={10} offset={7}>
                <Search
                    placeholder="enter your favorite movie"
                    enterButton="Search movie"
                    size="large"
                    onSearch={value => searchMovie(value)}
                />
            </Col>
        </div>
    )
}

export default SearchBox;