// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChatScreen = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user: username, text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
};

ChatScreen.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ChatScreen;

