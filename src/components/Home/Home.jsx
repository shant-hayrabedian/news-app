import React, { useState, useEffect } from 'react'
// import axios from 'axios'

import { Col, Row } from 'antd';
import './Home.css';



//redux../../redux/features/sourcesSlice/actions/actionCreators
import { useSelector, useDispatch } from 'react-redux'
import { loadFetchedSources } from '../../redux/features/sourcesSlice/actionCreators.js';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import SingleSourceCard from './SingleSourceCard/SingleSourceCard';

const Home = () => {

    const news = useSelector((state) => state.FetchSources?.sources) || [];
    
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(loadFetchedSources())

    }, [])

    const listOfNews = news.map((singleNews) => <SingleSourceCard key={singleNews.id} {...singleNews} />)

    return (
        <div>
            <h2>Sources</h2>
            <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                {listOfNews}
            </Row>
        </div>
    )
}

export default Home;