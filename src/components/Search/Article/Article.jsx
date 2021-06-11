import { Row, Col } from 'antd';
import { months } from '../../../lib/CONSTANTS';
import s from './Article.module.css';
import PropTypes from 'prop-types'

const Article = ({urlToImage, title, description, publishedAt}) => {
    const d = new Date(publishedAt)
    const monthDay = months[d.getMonth()];

    const publishedAtFormatted =  monthDay + " " + new Date(publishedAt).getDate() + " " + new Date(publishedAt).getFullYear();
    return (

        <div className={s.content}>
        <Row > 
            <Col span={6}>
                <div className={s.img}>
                    <img src={urlToImage !== "null" ? urlToImage : 'https://www.phimostop.com/wp-content/uploads/2018/09/no-image.jpg'} alt="no img" />
                </div>
            </Col>
            <Col span={16} >
                <div className={s.text}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h4>{publishedAtFormatted}</h4>
                </div>
            </Col>
        </Row>
        </div>
      
    )
}

export default Article

Article.propTypes={
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
}