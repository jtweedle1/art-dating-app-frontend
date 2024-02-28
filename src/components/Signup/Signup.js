import './Signup.scss';
import axios from 'axios';
import logo from '../../assets/logo.png'
import { useNavigate} from 'react-router-dom';
import { FormField, Button, Form, FormSelect, FormTextArea, FormCheckbox } from 'semantic-ui-react'

function Signup(){
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        // Assuming age, name, username, etc. are correctly gathered from the form
        const age = parseInt(event.target.age.value); // Convert age to an integer

        // Construct the payload as a JSON object
        const payload = {
            age: age,
            name: event.target.name.value,
            username: event.target.username.value,
            password: event.target.password.value,
            art: event.target.art.value,
            gender: "Nonbinary",
            bio: event.target.bio.value,
            roles: ['ROLE_USER'] // Adjust based on your roles setup; ensure it's an array
        };

        axios.post("http://localhost:8080/users", payload, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        })
            .then((response) => {
                navigate('/'); // Adjust as needed, e.g., to a login page or main area
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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