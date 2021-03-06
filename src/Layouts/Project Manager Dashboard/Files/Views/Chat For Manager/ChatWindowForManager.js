import { ChatEngine } from 'react-chat-engine';
import LoginForAdmin from "./LoginChatForManager";
import ChatFeed from '../../../../../Views/Linguistics Chat/ChatFeed';
//import './App.css';
import "./ChatStyle.css"


function ChatWindowForManager() {
    
    const projectID = 'e65fc003-4b11-47a9-84e9-72a212dc728e';
    if (!localStorage.getItem('usernameManager')){
      return <LoginForAdmin />;
    } 

    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('usernameManager')}
        userSecret={localStorage.getItem('passwordManager')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };

export default ChatWindowForManager
