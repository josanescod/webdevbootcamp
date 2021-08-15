import React from 'react';
import Input from './Input';

function Login() {
    return (
        <form className="form">
            <Input
                key='1'
                type="text"
                placeholder="Username"
            />
            <Input
                key='2'
                type="password"
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;