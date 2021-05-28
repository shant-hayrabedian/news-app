import { Card, Col} from 'antd';
import '../Home/Home.css';



const SingleCard = ({ name, description }) => {

    const { Meta } = Card;

    return (
        
        <Col >

        <Card
            style={{ width: 300, background: '#C4C4C4', marginBottom: 48}}
            actions={[
                <a>political</a>,
                <a>Language</a>,
                <a>country</a>
            ]}
        >
            <Meta
                title={name}
                description={description}
            />
        </Card>
        </Col>
       
       
    )
}

export default SingleCard
