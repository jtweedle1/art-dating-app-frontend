import './Login.scss';
import axios from 'axios';
import logo from '../../assets/logo.png'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'


function Login(){
    return (
        <div className='login'>
            <img className='logo' src={logo} alt="logo"/>
            <Form>
                <FormField>
                <label>Username</label>
                <input placeholder='Username' />
                </FormField>
                <FormField>
                <label>Password</label>
                <input placeholder='Password' />
                </FormField>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    );
}

export default Login;