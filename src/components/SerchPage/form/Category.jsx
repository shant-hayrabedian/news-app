import { Checkbox } from 'antd';
import { Row, Col } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Category = ()=>{
    return (
        <div className='item'>
            <h3>Category</h3>
            <Row gutter={[24, 8]}>
            <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </Col>   
            </Row>
        </div>
    )
}
export default Category