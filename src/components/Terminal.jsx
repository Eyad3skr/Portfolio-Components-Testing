import React, { useState } from 'react';
import { ReactComponent as TerminalBorder } from '../Assets/TerminalBorder.svg'; 
import './terminal.css'; 

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setCommands([...commands, input]);
      setInput('');
    }
  };

  return (
    <div className="terminal-container">
      <TerminalBorder className="terminal-border" />
      <div className="terminal-content">
        {commands.map((command, index) => (
          <div key={index} className="terminal-command">
            <span>$ {command}</span>
          </div>
        ))}
        <input
          type="text"
          className="terminal-input"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
