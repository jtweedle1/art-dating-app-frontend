import './Matches.scss';
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
    GridColumn, 
    Grid,
  } from 'semantic-ui-react'
//   const { ObjectId } = require('mongodb');


function Matches({user}){
    const [matches, setMatches] = useState(null)

    useEffect(() => {
        // const timestamp = user.id.timestamp; // Extract the timestamp from the object
        // const timestampSeconds = Math.floor(timestamp / 1000); // Convert timestamp to seconds
        // const objectId = ObjectId.createFromTime(timestampSeconds); // Create ObjectId from timestamp
        // const objectIdString = objectId.toHexString(); // Convert ObjectId to string
        const timestamp = user.id.timestamp; // Extract the timestamp from the object
    const timestampString = timestamp.toString(); 
    console.log(timestampString)
    axios.get(`http://localhost:8080/likes/matches?userId=65df6cad153d9d1bf6d95989`)
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
        <div className='matches'>
            <p>Matches</p>
            <Grid>
            {matches?
            <>
            {matches.map((person,index)=>{
                return(
                    //to format how many cards at width
                    <GridColumn key={index} mobile={8} tablet={4} computer={2}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <CardContent>
                <CardHeader key={index}>{person.name}</CardHeader>
                <CardMeta>
                    <span className='date'>{person.age}</span>
                </CardMeta>
                <CardDescription>
                    {person.bio}
                </CardDescription>
                </CardContent>
                <CardContent extra>
                <a>
                    <Icon name='user' />
                    {person.location}
                </a>
                </CardContent>
            </Card>
            </GridColumn>
            )
        })}
        </>
           : 
           <p>no matches</p>
           }
            </Grid>
        </div>
    );
}

export default Matches;