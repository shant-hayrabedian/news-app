import React, { useState, useEffect } from 'react'
import { Card } from 'antd';

import { Col, Row } from 'antd';
import './Home.css';



//redux../../redux/features/sourcesSlice/actions/actionCreators
import { useSelector, useDispatch } from 'react-redux'

import { loadFetchedSources } from '../../redux/features/sourcesSlice/actionCreators.js';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import SingleSourceCard from './SingleSourceCard/SingleSourceCard';
import { toEmptyTheSingleSourceArray } from '../../redux/features/singleSourceSlice/actionCreators';
import { resetPage } from '../../redux/features/pageSlice/actionCreators';
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
    const { Meta } = Card;

    const sources = useSelector((state) => state.FetchedSources?.sources) || [];
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(async () => {
        setLoading(true)
        await dispatch(loadFetchedSources())
        setLoading(false)



    }, [])



    const listOfSources = sources.map((singleSource) => <SingleSourceCard key={singleSource.id} {...singleSource} />)

    return (
        <>
            {
                loading ?
                    <FadeLoader
                        color={"#B9ECF0"}
                        loading={loading}
                        size={40}
                        radius={2}
                        height={15}
                        width={5}
                        margin={10}
                    />
                    :
                    <div>

                        <p className="sourcesParagraph">Sources</p>
                        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                            style={{ marginLeft: '-16px', marginRight: '0px', rowGap: '0px' }} >
                            {listOfSources}
                        </Row>

                    </div>
            }
        </>
    )
}

export default Home;