import { Card, Col } from 'antd';
import { Link } from 'react-router-dom'
import {countries, languages, lookup} from 'country-data'
import '../Home.css';
import { resetPage } from '../../../redux/features/pageSlice/actionCreators';
import { toEmptyTheSingleSourceArray } from '../../../redux/features/singleSourceSlice/actionCreators';
import { useDispatch } from 'react-redux';



const SingleSourceCard = (props) => {
    const { name, description, country, category, language, id } = props
    const { Meta } = Card;

    const dispatch = useDispatch()
    
    return (

        <Col >

            <Card
                style={{ width: 300, background: '#C4C4C4', marginBottom: 48 }}
                actions={[
                    <a>{category[0].toUpperCase() + category.substring(1)}</a>,
                    <a>{language === 'ud' ? "Urdu" : languages[language]?.name}</a>,
                    <a>{country === 'zh' ? "China" : countries[country.toUpperCase()]?.name}</a>
                ]}
            >
                <Link to={`/search?sources=${id}`} >
                    <Meta
                        title={name}
                        description={description}
                        onClick={()=> {
                            dispatch(resetPage(1))
                            dispatch(toEmptyTheSingleSourceArray())

                        }}
                    />
                </Link>
            </Card>
        </Col>


    )
}

export default SingleSourceCard
