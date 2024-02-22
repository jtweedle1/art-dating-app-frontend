import './Signup.scss';
import axios from 'axios';
import logo from '../../assets/logo.png'
import { FormField, Button, Checkbox, Form, FormSelect } from 'semantic-ui-react'

function Signup(){
    const options = [
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'n', text: 'Nonbinary', value: 'nonbinary' },
        { key: 'a', text: 'Art', value: 'art' }
      ]
    return (
        <div className='signup'>
            <p>signup</p>
            <img src={logo} alt="logo"/>
            <Form>
                <FormField>
                <label>Username</label>
                <input placeholder='Username' />
                </FormField>
                <FormField>
                <label>Password</label>
                <input placeholder='Password' />
                </FormField>
                <FormField>
                <label>Art</label>
                <input placeholder='Art' />
                </FormField>
                <FormField>
                <label>Age</label>
                <input placeholder='Age' />
                </FormField>
                <FormSelect
                    fluid
                    label='Gender'
                    options={options}
                    placeholder='Gender'
                />
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    );
}

export default Signup;