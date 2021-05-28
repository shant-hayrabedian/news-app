import { Result, Button } from 'antd';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='not-found'>
            {/*<h2>404 Error</h2>*/}
            {/*<p>Sorry Page Not Found</p>*/}


            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
            />
        </div>
    )
}

export default NotFound;