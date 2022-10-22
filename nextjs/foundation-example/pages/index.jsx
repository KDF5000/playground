import { useState } from 'react';

function Header({ title }) {
  console.log(title);
  /* {} 的意思是从jsx进入到js的世界里*/
  return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log("increment like count");
    setLikes(likes+1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀 | React 💙"/>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}

