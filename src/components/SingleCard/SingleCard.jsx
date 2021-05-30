import { Card, Col} from 'antd';
import { NavLink, Link } from 'react-router-dom'

import '../Home/Home.css';



const SingleCard = ({ name, description, country, category, language }) => {

    const { Meta } = Card;

    return (
        
        <Col >

        <Card
            style={{ width: 300, background: '#C4C4C4', marginBottom: 48}}
            actions={[
                <a>{category}</a>,
                <a>{language}</a>,
                <a>{country}</a>
            ]}
            
        >
            <Link to ="/search">
            <Meta
                title={name}
                description={description}
            />
            </Link>
        </Card>
        </Col>
       
       
    )
}

export default SingleCard
