import './Main.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
  } from 'semantic-ui-react'


function Main({user}){
const [toSwipe,setToSwipe] = useState(null);


    async function handleLike (){
        
    //     axios.post("http://localhost:8080/likes", {
    //         likerId: user.id,
    //         likeeId: toSwipe.id

    //     },{
    //         withCredentials: true
    //     })
    //         .then((response) => {
    //             let data = response.data;
    //             setToSwipe(data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

        console.log("love is in the air")

    //     console.log(user)
    }

    async function getPeople () {
        
        axios.get("http://localhost:8080/users/main?userId=65df6cad153d9d1bf6d95989", {
    },{
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
        .then((response) => {
            let data = response.data;
            setToSwipe(data)
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        });
    };

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