import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { useQuery } from '../../functions/URLSearchParams'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource, toEmptyTheSingleSourceArray } from '../../redux/features/singleSourceSlice/actionCreators';

import Article from './Article/Article';

import 'antd/dist/antd.css';
import s from './Search.module.css'
import { Row, Col } from 'antd';
import BigForm from './form/Form';
import Sorted from './form/Sorted';
import InfiniteScroll from 'react-infinite-scroll-component';
import { updatePageSize } from '../../redux/features/pageSlice/actionCreators';
import { loadSearchBySelectedQueryParams } from "../../redux/features/headerSearchSlice/actionCreators";
import { loadFetchedSources } from '../../redux/features/sourcesSlice/actionCreators';
import { loadDatabyCheckboxes } from '../../redux/features/filterSlice/actionCreators';

//!!!



const Search = () => {
    const query = useQuery()
    const dispatch = useDispatch();

    const sources = query.get("sources")
    const q = query.get("q")

    const sort = query.get('sortBy')


    const initialPageState = useSelector((state) => state.Page.page)


    const sortOrder = useSelector(state => state.Page.order)

    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles) || [];

    const sortArticles = (articles, sortOrder) => {
        return articles.sort((a, b) => {
            const dateA = Date.parse(a.publishedAt) / 1000;
            const dateB = Date.parse(b.publishedAt) / 1000;
            const order = sortOrder === "latest" ? 1 : -1;

            return (dateA < dateB ? 1 : -1) * order;
        })
    }

    const articlesFromSourceRenderArray = sortArticles(articlesFromSource, sortOrder).map((article, index) => <Article key={index} {...article} />)



    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || []

    const articlesFromSearchRenderArray = sortArticles(articlesFromSearch, sortOrder).map((article, index) => <Article key={index} {...article} />)



    ////!!
    const articlesFromFilter = useSelector((state) => state.Filter.articlesFromFilter) || []

    const articlesFromFilterRrender = sortArticles(articlesFromFilter, sortOrder).map((article, index) => <Article key={index} {...article} />)

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




    useEffect(() => {

        if (sources) {

            dispatch(loadArticlesBySelectedSource(sources, 2, initialPageState, sort))
            dispatch(toEmptyTheSingleSourceArray)

        }

    }, [sources, initialPageState])

    //sortOrder

    useEffect(async () => {

        if (q) {

            dispatch(loadSearchBySelectedQueryParams(q, 2, initialPageState, sort))

            dispatch(toEmptyTheSingleSourceArray)

        }

    }, [q, initialPageState])



    useEffect(() => {

        dispatch(loadFetchedSources())
    }, [])





    return (

        <div className={s.space} id="area">

            <Row justify='space-around'>
                <Col xs={24} sm={24} md={14} lg={7}>
                    <BigForm />
                </Col>

                <Col xs={24} sm={24} md={14} lg={15}>
                    <Sorted />
                    {sources ?
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

        </div>

    )
}

export default Search;