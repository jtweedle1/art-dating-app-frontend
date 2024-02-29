import './Messages.scss';
import { MessageHeader, Message } from 'semantic-ui-react'

function Messages({matches}){
    const colors = ['green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'black'];

    return (
        <div className='messages'>
     {matches?
            <>
            {matches.map((person,index)=>{
                const colorIndex = index % colors.length;
                const color = colors[colorIndex];
                return(
            <Message color={color} key={index}>
            <MessageHeader>{person.name}</MessageHeader>
    <p>
      Start a conversation with {person.name}...
    </p>
  </Message>
          )
        })}
        </>
           : 
           <p>no matches</p>
           }
        </div>
    );
}

export default Messages;