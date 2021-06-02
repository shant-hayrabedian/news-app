import { Row, Col } from 'antd';
import s from './Items.module.css';

const Items = () => {
    return(
        <div className={s.content}>
            <Row > 
                <Col span={6}>
                    <div className={s.img}>
                        <img src='https://www.phimostop.com/wp-content/uploads/2018/09/no-image.jpg'/>
                    </div>
                </Col>
                <Col span={16} >
                    <div className={s.text}>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci, magni perspiciatis iure reprehenderit labore quisquam ut odio quibusdam reiciendis blanditiis! Deserunt voluptatum est rerum ad quas nostrum fuga enim?</p>
                        <h4>May 15, 2021</h4>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Items