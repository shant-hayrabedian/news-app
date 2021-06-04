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
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadMoreArticles } from '../../redux/features/pageSlice/pageReducer';
import { updatePageSize } from '../../redux/features/pageSlice/actionCreators';
import { loadSearchBySelectedQueryParams } from '../../redux/features/headerSearchSlice/actionCreators';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery()
    const dispatch = useDispatch();

    const sources = query.get("sources")
    console.log(sources)
    const q = query.get("q")

    let page = query.get("page")
    let pageSize = query.get("pageSize")




    const initialPageState = useSelector((state) => state.Page.page)

    const test = useSelector((state) => console.log(state))


    //shouldbe a separateComponent
    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles) || [];

    const articlesRenderArray = <InfiniteScroll
        dataLength={articlesFromSource.length}
        next={() => dispatch(updatePageSize(1))}
        hasMore={true}>
        {articlesFromSource.map((article, index) => <Article key={index} {...article} />)}
    </InfiniteScroll>


    //
        // should be a separate component
        const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || [];

    const articlesFromSearchRenderArray = <InfiniteScroll
        dataLength={articlesFromSearch.length}
        next={() => dispatch(updatePageSize(1))}
        hasMore={true}>
        {articlesFromSearch.map((article, index) => <Article key={index} {...article} />)}
    </InfiniteScroll>


    useEffect(() => {
        if (sources) {
            dispatch(loadArticlesBySelectedSource(sources, pageSize, initialPageState))
        }
    }, [sources, initialPageState])
    
    useEffect(() => {
        if(q){
            dispatch(loadSearchBySelectedQueryParams(q, pageSize, initialPageState))
        }
}, [q, initialPageState])

    return (

        <div className={s.space}>
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
        </div>

    )
}

export default Search;