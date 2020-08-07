import React from 'react';
import { Row, Col, Tag, Typography } from 'antd';
import 'antd/dist/antd.css';
const TextTitle = Typography.Title;


const Detail = ({ Title, Poster, imdbRating, Rated, Runtime, Genre, Plot }) => {
    return (
        <>
            <Row>
                <Col span={11}>
                    <img
                        src={Poster}
                        alt={Title}
                    />
                </Col>
                <Col span={13}>
                    <Row>
                        <Col span={21}>
                            <TextTitle level={4}>{Title}</TextTitle></Col>
                        <Col span={3} style={{ textAlign: 'right' }}>
                            <TextTitle level={4}><span style={{ color: 'orange' }}>{imdbRating}</span></TextTitle>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Tag>{Rated}</Tag>
                            <Tag>{Runtime}</Tag>
                            <Tag>{Genre}</Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{Plot}</Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Detail;