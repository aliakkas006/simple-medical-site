import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Sign in</h2>
            <Button onClick={signInUsingGoogle} variant="info">Google sign in</Button>
        </div>
    );
};

export default SignIn;