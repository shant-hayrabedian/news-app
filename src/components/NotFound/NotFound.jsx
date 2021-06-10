import { Result, Button } from 'antd';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='not-fonund'>
            <Result
                status="404"
                title="404 Error"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
            />
        </div>
    )
}
export default NotFound;