import React from 'react';
import { Input, Row, Col, } from 'antd';
import { Typography } from '@material-ui/core';

const { Search } = Input;


const SearchBox = ({ searchHandler }) => {
    return (
        <div>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }} color="primary">OMDB</Typography>
            <Row>
                <Col span={10} offset={7}>
                    <Search
                        placeholder="enter movie"
                        enterButton="Search movie"
                        size="large"
                        onSearch={value => searchHandler(value)}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default SearchBox;