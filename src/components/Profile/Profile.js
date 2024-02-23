import './Profile.scss';
import axios from 'axios';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
  } from 'semantic-ui-react'
  


function Profile(){
    return (
        <div className='profile'>
            <p>profile</p>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <CardContent>
                <CardHeader>Matthew</CardHeader>
                <CardMeta>
                    <span className='date'>Joined in 2015</span>
                </CardMeta>
                <CardDescription>
                    Matthew is a musician living in Nashville.
                </CardDescription>
                </CardContent>
                <CardContent extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </CardContent>
            </Card>
        </div>
    );
}

export default Profile;