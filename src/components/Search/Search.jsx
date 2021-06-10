import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource } from '../../redux/features/singleSourceSlice/actionCreators';

import Article from './Article/Article';

import 'antd/dist/antd.css';
import s from './Search.module.css'
import { Row, Col } from 'antd';
import Form from './form/Form';
import Clear from './form/Clear';
import Sorted from './Sorted';
import GridLoader from "react-spinners/GridLoader";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery()
    const dispatch = useDispatch();

    const sources = query.get("sources")


    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles?.articles) || [];
    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent?.articles) || [];

    const articlesRenderArray = articlesFromSource.map((article) => <Article key={article.url} {...article} />)

    const articlesFromSearchRenderArray = articlesFromSearch.map((article) => <Article key={article.url} {...article} />)

    useEffect(() => {
        if (sources) {
            dispatch(loadArticlesBySelectedSource(sources))
        }

    }, [])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
<div className={s.space}>
            {
                loading ?
                <GridLoader 
                color={"#B9ECF0"} 
                loading={loading} 
                size={20}
                // radius={2}
                // margin={2}
                height={10}
                width={5}
                />
                :

        
            <Row justify='space-around'>
                <Col xs={24} sm={24} md={14} lg={7}>
                    <Clear />
                    <Form />
                </Col>
                <Col xs={24} sm={24} md={14} lg={15}>
                    <Sorted />
                    {sources ? articlesRenderArray : articlesFromSearchRenderArray}
                </Col>
            </Row>
}
</div>
    )}

export default Search;