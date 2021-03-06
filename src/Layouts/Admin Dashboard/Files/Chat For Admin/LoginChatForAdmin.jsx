import { useState } from 'react';
import axios from 'axios';
import "./ChatStyle.css"

const projectID = 'e65fc003-4b11-47a9-84e9-72a212dc728e';

const LoginChatForAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
        console.log("hit")
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('usernameAdmin', username);
      localStorage.setItem('passwordAdmin', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapperChat">
      <div className="formChat">
        <h1 className="titleChat">Linguistics Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="inputChat" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputChat" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="buttonChat">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginChatForAdmin;
