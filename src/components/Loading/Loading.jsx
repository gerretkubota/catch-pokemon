import React, { useState, useEffect } from 'react';
import './main.css';

const Loading = () => {
  const [text, setText] = useState('Loading');

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (text === `${text}...`) {
        setText(text);
      } else {
        setText(`${text}.`);
      }
    }, 200);

    return () => window.clearInterval(interval);
  }, [text]);

  return <div style={{ height: 500 }}>{text}</div>;
};

export default Loading;
