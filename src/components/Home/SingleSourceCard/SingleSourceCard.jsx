import { Card, Col } from 'antd';
import { Link } from 'react-router-dom'
import { countries, languages } from 'country-data'
import '../Home.css';
import { resetPage } from '../../../redux/features/pageSlice/actionCreators';
import { toEmptyTheSingleSourceArray } from '../../../redux/features/singleSourceSlice/actionCreators';
import { useDispatch } from 'react-redux';
import { showCountryAndCategory, toEmptyTheArrayFromFilter } from '../../../redux/features/filterSlice/actionCreators';
import PropTypes from 'prop-types'



const SingleSourceCard = (props) => {
    const { name, description, country, category, language, id } = props
    const { Meta } = Card;

    const dispatch = useDispatch()

    return (

        <Col >

            <Card
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 350,
                    background: '#5F9EA0',
                    marginBottom: '20px',
                    height: '220px',
                    fontSize: '15px'
                }}

            >

                <Link to={`/search?sources=${id}`} >
                    <Meta
                        title={name}
                        description={description}
                        onClick={() => {
                            dispatch(resetPage(1))
                            dispatch(toEmptyTheSingleSourceArray())
                            dispatch(showCountryAndCategory())
                            dispatch(toEmptyTheArrayFromFilter())
                        }}
                    />
                </Link>

                <div className="icons">
                    <div className="bot" style={{
                       
                    }}>

                        <a>{category[0].toUpperCase() + category.substring(1)}</a>
                        <a>{language === 'ud' ? "Urdu" : languages[language]?.name}</a>
                        <a>{country === 'zh' ? "China" : countries[country.toUpperCase()]?.name}</a>

                    </div>
                </div>
            </Card>

        </Col>


    )
}

export default SingleSourceCard
SingleSourceCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    id: PropTypes.string,

}