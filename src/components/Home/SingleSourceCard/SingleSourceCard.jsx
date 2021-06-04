import { Card, Col } from 'antd';
import { Link } from 'react-router-dom'
import {countries, languages, lookup} from 'country-data'
import '../Home.css';



const SingleSourceCard = (props) => {
    const { name, description, country, category, language, id } = props
    const { Meta } = Card;

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
                    />
                </Link>
            </Card>
        </Col>


    )
}

export default SingleSourceCard
