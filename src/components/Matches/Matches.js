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


function Matches({user, setMatches, matches}){

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