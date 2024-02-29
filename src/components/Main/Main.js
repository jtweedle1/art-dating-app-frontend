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


function Main({user,matches,setMatches}){
const [toSwipe,setToSwipe] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

    async function handleLike (){
        console.log(toSwipe[currentIndex].id)
        axios.post("http://localhost:8080/likes", {
            headers: {
                'Content-Type': 'application/json',
            },
            likerId: user.stringId,
            likeeId: toSwipe[currentIndex].stringId

        },{
            withCredentials: true
        })
            .then((response) => {
                let data = response.data;
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("love is in the air")
        if (currentIndex < toSwipe.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }else {
            setCurrentIndex(0); // Reset to the beginning of the array
        }
    }
    
    const handleDislike = () => {
        if (currentIndex < toSwipe.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }else {
            setCurrentIndex(0); // Reset to the beginning of the array
        }
    };

    //code to implement swiping
    useEffect(() => {
        getPeople();
    }, []);

    async function getPeople () {
        // if(user !==null){
        axios.get(`http://localhost:8080/users/main?userId=${user.stringId}`, {
    },{
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
        .then((response) => {
            let data = response.data;
            setToSwipe(data)
        })
        .catch((error) => {
            console.log(error);
        });

    // }
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };

    useEffect(() => {
 
        axios.get(`http://localhost:8080/likes/matches?userId=${user.stringId}`)
            .then((response) => {
                let data = response.data;
                setMatches(data);
                console.log(matches)
            })
            .catch((error) => {
                console.log(error);
            });
        
        }, []);
    return (
        <div className='main'>
            <div>Art for your heart</div>
        {toSwipe && toSwipe.length > 0 && (
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <CardContent>
                        <CardHeader>{toSwipe[currentIndex].name}</CardHeader>
                        <CardMeta>
                            <span className='date'>Joined in 2015</span>
                        </CardMeta>
                        <CardDescription>
                            {toSwipe[currentIndex].bio}
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </CardContent>
                </Card>
            )}
            <div className='button-container'>
            <button className='button-dislike'onClick={handleDislike}>
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