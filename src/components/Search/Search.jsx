import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { loadArticlesBySelectedSource } from '../../redux/features/singleSourceSlice/actionCreators';
import SingleSourcedArticlesList from './SingleSourcedArticlesList/SingleSourcedArticlesList';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery()

    const sources = query.get("sources")
        console.log(sources)
  
    const articles = useSelector((state) => state.FetchArticlesBySource.articles?.articles) || [];
     console.log(articles)
    const dispatch = useDispatch();

    //!! ADD NEW COMPONENT FOR THIS ONE
    const articlesRenderArray = articles.map((article) => <SingleSourcedArticlesList key={article.url} {...article} /> )

    useEffect(() => {

        dispatch(loadArticlesBySelectedSource(sources.trim().toLowerCase()))

    }, [])

    return (
        <div style={{display: "flex", justifyContent: "space-between"  }}>
            <div>
            <p style={{width: "500px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sed ab inventore voluptate rerum! Facere magni eius incidunt vero facilis ducimus quisquam? Quos inventore nihil impedit illo deserunt minus consectetur molestiae nostrum facilis, deleniti ipsam doloribus recusandae rem sit dolor animi qui a temporibus tempore nam blanditiis quis architecto. Ipsam quos illum corporis? Veritatis minus possimus dicta odio quia, ipsa officia mollitia eligendi exercitationem vel placeat dolorem perferendis recusandae perspiciatis commodi, at asperiores praesentium accusamus expedita! Tenetur expedita a voluptate, voluptas explicabo perferendis provident culpa cum similique rem saepe non et illum! Nisi repellat soluta non, rerum harum unde ab?</p>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            {articlesRenderArray}
            </div>
        </div>
    )
}

export default Search;