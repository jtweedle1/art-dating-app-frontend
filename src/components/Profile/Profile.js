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
  


function Profile({user, handleLogout}){
    return (
        <div className='profile'>
            <p>My Profile</p>
            <Card>
                <Image src={user.realPhoto} wrapped ui={false} />
                <CardContent>
                <CardHeader>{user.name}</CardHeader>
                <CardMeta>
                    <span className='date'>{user.age}</span>
                </CardMeta>
                <CardDescription>
                    {user.bio}
                </CardDescription>
                </CardContent>
                <CardContent extra>
                <a>
                    <Icon name='user' />
                    {user.location}
                </a>
                </CardContent>       
                <button className='button-like' onClick={handleLogout}><span class="material-symbols-outlined">
logout
</span></button>     
            </Card>
        </div>
    );
}

export default Profile;