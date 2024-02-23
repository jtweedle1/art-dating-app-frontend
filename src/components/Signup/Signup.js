import './Signup.scss';
import axios from 'axios';
import logo from '../../assets/logo.png'
import { useNavigate} from 'react-router-dom';
import { FormField, Button, Form, FormSelect, FormTextArea, FormCheckbox } from 'semantic-ui-react'

function Signup(){
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const gender = formData.get('gender');
        const age = parseInt(formData.get('age')); 

        
        axios.post("http://localhost:8080/users", {
            name: formData.get('name'),
            username: formData.get('username'),
            password: formData.get('password'),
            art: formData.get('art'),
            age: age,
            gender: gender,
            bio: formData.get('bio'),
        })
            .then((response) => {
                let data = response.data;
                navigate('/')
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const options = [
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'n', text: 'Nonbinary', value: 'nonbinary' },
        { key: 'a', text: 'Art', value: 'art' }
      ]
    return (
        <div className='signup'>
            <img className='logo'src={logo} alt="logo"/>
            <Form className='formContainer' onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <FormField>
                <label>Name</label>
                <input placeholder='name' type="text" name= "name" />
                </FormField>
                <FormField>
                <label>Username</label>
                <input placeholder='Username' type="text" name= "username" />
                </FormField>
                <FormField>
                <label>Password</label>
                <input placeholder='Password' type="text" name= "password" />
                </FormField>
                <FormField>
                <label>Art</label>
                <input placeholder='Art' type="text" name= "art" />
                </FormField>
                <FormField>
                <label>Age</label>
                <input placeholder='Age'type="text" name= "age"  />
                </FormField>
                <FormSelect
                    fluid
                    label='Gender'
                    options={options}
                    placeholder='Gender'  name= "gender" 
                />
                <FormTextArea label='Bio' placeholder='Tell us more about you...'  name= "bio"  />
                <FormCheckbox label='I agree to the Terms and Conditions' />
                <Button type='submit'>Signup</Button>
            </Form>
        </div>
    );
}

export default Signup;