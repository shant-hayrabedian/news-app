import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource } from '../../Features/SingleSourceSlice/Actions/actionCreators';
import SingleCard from '../Home/SingleSourceCard/SingleSourceCard';


const Search = () => {
    const {id} = useParams()
     console.log(id)
    const articles = useSelector((state) => state.FetchArticlesBySource.articles?.articles) || [];
    console.log(articles)
    const dispatch = useDispatch();

    //!! ADD NEW COMPONENT FOR THIS ONE
    // const articlesRenderArray = articles.map((article) => <SingleCard/>)
    useEffect(() => {

        dispatch(loadArticlesBySelectedSource(id.trim().toLowerCase()))

    }, [])

    return (
        <div>
           
        </div>
    )
}

export default Search;