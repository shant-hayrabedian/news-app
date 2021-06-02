import { Row, Col } from 'antd';
import s from './Article.module.css';


const Article = ({urlToImage, title, description, publishedAt}) => {
    
    return (

        <div className={s.content}>
        <Row > 
            <Col span={6}>
                <div className={s.img}>
                    <img src={urlToImage} />
                </div>
            </Col>
            <Col span={16} >
                <div className={s.text}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h4>{publishedAt}</h4>
                </div>
            </Col>
        </Row>
        </div>
      
    )
}

export default Article
