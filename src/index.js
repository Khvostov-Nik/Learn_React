import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, message: "Lorem ipsum dolor sit amet consectetur." , likeCount :'12'},
    { id: 2, message: "Lorem ipsum dolor sit." , likeCount:'8'},
    { id: 3, message: "Lorem ipsum dolor sit amet.." , likeCount:'11'}
  ];
  let dialogs = [
    { id: 1, name: "Kolayn" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Valera" },
  ];
 
  let messages = [
    {
      id: 1,
      message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Necessitatibus, deserunt.",
    },
    {
      id: 2,
      message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sit sapiente doloremque eum voluptatem aliquid.",
    },
    { id: 3, message: "Lorem ipsum dolor sit amet." },
    {
      id: 4,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veniam quis aperiam quibusdam alias!",
    },
  ];

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs} />, document.getElementById('root'));


reportWebVitals();
