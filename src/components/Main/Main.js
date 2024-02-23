import './Main.scss';
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


function Main(){



    async function handleLike (){
        console.log("love is in the air")
    }

    return (
        <div className='main'>
            <div>Art for your heart</div>
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
            <div className='button-container'>
            <button className='button-dislike'>
                <span class="material-symbols-outlined">close</span>
            </button>
            <button className='button-like' onClick={handleLike}>
                <span class="material-symbols-outlined">favorite</span>
            </button>
            </div>
        </div>
    );
}

export default Main;