import React from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import notFound from '../../../images/icon/2488755-ai.png';

const NotFound = () => {
    return (
        <div className="text-center">
            {/* <h4 className="text-danger">Page not found!</h4>
            <h3>404!</h3> */}
            <img className="w-100" src={notFound} alt="" />
            <Link to="/">
                <Button className="btn-warning my-3">Go to home!</Button>
            </Link>
        </div>
    );
};

export default NotFound;