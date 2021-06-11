import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { useQuery } from '../../functions/URLSearchParams'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource, sortingSourcesFromNewest, toEmptyTheSingleSourceArray, sortingSourcesFromOldest } from '../../redux/features/singleSourceSlice/actionCreators';

import Article from './Article/Article';

import 'antd/dist/antd.css';
import s from './Search.module.css'
import { Row, Col, Dropdown } from 'antd';
import BigForm from './form/Form';
import Sorted from './form/Sorted';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadMoreArticles } from '../../redux/features/pageSlice/pageReducer';
import { resetPage, updatePageSize } from '../../redux/features/pageSlice/actionCreators';
import { loadSearchBySelectedQueryParams, reverseArrFromSearch, sortingSearchedFromNewest, sortingSearchedFromOldest, toEmptyTheSearchedArray } from "../../redux/features/headerSearchSlice/actionCreators";
import { loadFetchedSources } from '../../redux/features/sourcesSlice/actionCreators';
import { loadDatabyCheckboxes, sortingFilteredArticlesFromNewest, sortingFilteredArticlesFromOldest, toEmptyTheArrayFromFilter } from '../../redux/features/filterSlice/actionCreators';

//!!!
import GridLoader from "react-spinners/GridLoader";


// console.log(today)
// console.log(fullDate)

const Search = () => {
    const query = useQuery()
    const dispatch = useDispatch();

    const sources = query.get("sources")
    const q = query.get("q")
    // console.log(q)
    // let page = query.get("page")
    let pageSize = query.get("pageSize")
    // console.log(pageSize)
    let page = query.get('page')
    //  console.log(page)
    let sort = query.get('sortBy')


    const initialPageState = useSelector((state) => state.Page.page)


    const sortOrder = useSelector(state => state.Page.order)
    //shouldbe a separateComponent
    const stat = useSelector(state => console.log(state))

    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles) || []

    const articlesFromSourceRenderArray = articlesFromSource.map((article, index) => <Article key={index} {...article} />)


    // should be a separate component

    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || []

    const articlesFromSearchRenderArray = articlesFromSearch.map((article, index) => <Article key={index} {...article} />)



    ////!!
    const articlesFromFilter = useSelector((state) => state.Filter.articlesFromFilter) || []

    const articlesFromFilterRrender = articlesFromFilter.map((article, index) => <Article key={index} {...article} />)

    ////!!


    // const magicFunction = (order, articlesState) => {

    //     if (order === "latest") {
    //         if (articlesState === articlesFromSource) {
    //             dispatch(toEmptyTheSingleSourceArray())
    //             dispatch(sortingSourcesFromNewest(articlesState))
    //         } else if (articlesState === articlesFromSearch) {
    //             dispatch(toEmptyTheSearchedArray())
    //             dispatch(sortingSearchedFromNewest(articlesState))
    //         }
    //     } else {
    //         if (articlesState === articlesFromSource) {
    //             dispatch(toEmptyTheSingleSourceArray())
    //             dispatch(sortingSourcesFromOldest(articlesState))
    //         } else if (articlesState === articlesFromSearch) {
    //             dispatch(toEmptyTheSearchedArray())
    //             dispatch(sortingSearchedFromOldest(articlesState))
    //         }
    //     }

    // }


    // const today =  new Date().toISOString().split('T')[0];
    const sourceFromFilter = query.get("source")
    const countryFromFilter = query.get("country")
    const categoryFromFilter = query.get("category")
    const qFromFilter = query.get('qFromFilter')





    useEffect(() => {

        if (categoryFromFilter || countryFromFilter || qFromFilter || sourceFromFilter) {
            dispatch(loadDatabyCheckboxes(sourceFromFilter ? sourceFromFilter : null,
                qFromFilter ? qFromFilter : null,
                countryFromFilter ? countryFromFilter : null,
                categoryFromFilter ? categoryFromFilter : null,
                null,
                initialPageState))
           
        }

    }, [categoryFromFilter, countryFromFilter, qFromFilter, sourceFromFilter, initialPageState])


    const [loading, setLoading] = useState(false);


    useEffect(() => {

        if (sources) {

            dispatch(loadArticlesBySelectedSource(sources, 2, initialPageState, sort))
           dispatch(toEmptyTheSingleSourceArray)
            // magicFunction(sortOrder, articlesFromSource)

        }

    }, [sources, initialPageState])

                        //sortOrder

    useEffect(() => {

        if (q) {
            dispatch(loadSearchBySelectedQueryParams(q, 2, initialPageState, sort))
            dispatch(toEmptyTheSingleSourceArray)
            // magicFunction(sortOrder, articlesFromSearch)

        }

    }, [q, initialPageState])
                            //sortOrder


    useEffect(() => {
        dispatch(loadFetchedSources())
    }, [])


    useEffect(() => {
        setLoading(true)

        setTimeout(() => { 
            setLoading(false)
        }, 2000)
    }, [])


    return (

        <div className={s.space} id="area">
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
                    /> :
                    <Row justify='space-around'>
                        <Col xs={24} sm={24} md={14} lg={7}>
                            <BigForm />
                        </Col>

                        <Col xs={24} sm={24} md={14} lg={15}>
                            <Sorted />
                            { sources ?
                                    <InfiniteScroll
                                        dataLength={articlesFromSource.length - 5}
                                        next={() => dispatch(updatePageSize(1))}
                                        hasMore={true}>
                                        {articlesFromSourceRenderArray}
                                    </InfiniteScroll>
                                    :
                                    <InfiniteScroll
                                        dataLength={articlesFromSearch.length + 2}
                                        next={() => dispatch(updatePageSize(1))}
                                        hasMore={true}>
                                        {articlesFromSearchRenderArray}
                                    </InfiniteScroll>
                            }

                        
                                <InfiniteScroll
                                    dataLength={articlesFromFilter.length - 5}
                                    next={() => dispatch(updatePageSize(1))}
                                    hasMore={true}>
                                    {articlesFromFilterRrender}

                                </InfiniteScroll>
                        </Col>
                    </Row>
            }
        </div>

    )
}

export default Search;