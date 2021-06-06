import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import {useQuery} from '../../functions/URLSearchParams'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource, toEmptyTheSingleSourceArray } from '../../redux/features/singleSourceSlice/actionCreators';

import Article from './Article/Article';

import 'antd/dist/antd.css';
import s from './Search.module.css'
import { Row, Col, Dropdown } from 'antd';
import Form from './form/Form';
import Clear from './form/Clear';
import Sorted from './form/Sorted';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadMoreArticles } from '../../redux/features/pageSlice/pageReducer';
import { resetPage, updatePageSize } from '../../redux/features/pageSlice/actionCreators';
import { loadSearchBySelectedQueryParams, toEmptyTheSearchedArray } from "../../redux/features/headerSearchSlice/actionCreators";



// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Search = () => {
    const query = useQuery()
    const dispatch = useDispatch();

    const sources = query.get("sources")
    console.log(sources)
    const q = query.get("q")
    console.log(q)
    // let page = query.get("page")
    let pageSize = query.get("pageSize")
    console.log(pageSize)
     let page = query.get('page')
     console.log(page)
    let sort = query.get('sortBy')
    console.log(sort)



    const initialPageState = useSelector((state) => state.Page.page)

    const test = useSelector((state) => console.log(state))


    //shouldbe a separateComponent
    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles) || [];

    const articlesRenderArray = <InfiniteScroll
        dataLength={articlesFromSource.length-5}
        next={() => dispatch(updatePageSize(1))}
        hasMore={true}>
        {articlesFromSource.map((article, index) => <Article key={index} {...article} />)}
    </InfiniteScroll>


    //
    // should be a separate component
    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || [];

    const articlesFromSearchRenderArray = <InfiniteScroll
        dataLength={articlesFromSearch.length+2}
        next={() => dispatch(updatePageSize(1))}
        hasMore={true}>
        {articlesFromSearch.map((article, index) => <Article key={index} {...article} />)}
    </InfiniteScroll>

    // const today =  new Date().toISOString().split('T')[0];


    useEffect(() => {
        if (sources) {

            dispatch(loadArticlesBySelectedSource(sources, 5, initialPageState, sort))


        }
    }, [sources, initialPageState])

    // useEffect(()=> {
    //     if(articlesFromSource.length > 0){
    //         dispatch(toEmptyTheSingleSourceArray())}
    // }, [initialPageState])

    useEffect(() => {
        if (q) {
            dispatch(loadSearchBySelectedQueryParams(q, 5, page=initialPageState, sort))
            
        }
    }, [q, initialPageState])

    return (

        <div className={s.space} id="area">
            <Row justify='space-around'>
                <Col xs={24} sm={24} md={14} lg={7}>
                    <Clear />
                    <Form />
                </Col>

                <Col xs={24} sm={24} md={14} lg={15}>  
               
              <Sorted/>

                    {sources ? articlesRenderArray : articlesFromSearchRenderArray}
                </Col>
            </Row>
        </div>

    )
}

export default Search;