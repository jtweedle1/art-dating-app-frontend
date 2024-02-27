import './Login.scss';
import axios from 'axios';
import logo from '../../assets/logo.png'
import { useNavigate} from 'react-router-dom';
import { FormField, Button, Form } from 'semantic-ui-react'


function Login({handleLogin, user}){
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();
        
        axios.post("http://localhost:8080/users/login", {
            username: event.target.username.value,
            password: event.target.password.value,
        })
            .then((response) => {
                let data = response.data;
                handleLogin(data)
                navigate('/main');
                console.log(data.id)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <div className='login'>
            <img className='logo' src={logo} alt="logo"/>
            <div className='formContainer'>
            <Form onSubmit={handleSubmit}>
                <h2>Art for your heart</h2>
                <FormField>
                <label>Username</label>
                <input placeholder='Username'  type="text" name= "username" />
                </FormField>
                <FormField>
                <label>Password</label>
                <input placeholder='Password'type="text" name='password' />
                </FormField>
                <Button type='submit'>Login</Button>
            </Form>
            <a onClick={() => navigate('/signup')}>Don't have account? Signup</a>
            </div>
        </div>
    );
}

export default Login;