import { Card, Col } from 'antd';
import { Link } from 'react-router-dom'

import '../Home.css';



const SingleSourceCard = (props) => {
    const { name, description, country, category, language, id } = props
    const { Meta } = Card;

    return (

        <Col >

            <Card
                style={{ width: 300, background: '#C4C4C4', marginBottom: 48 }}
                actions={[
                    <a>{category}</a>,
                    <a>{language}</a>,
                    <a>{country}</a>
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
