import { useState } from 'react';
import { queryDatabase, retrievePage } from '../lib/notion';
import { Blocks } from "@notion-cms/react";

export async function getStaticProps() {
  const data = await queryDatabase("f532a109abd34b259c6bd1334d277ec8", { limit: Infinity, pageSize: 100 });
  console.log(data);
  const page = await retrievePage(data[0].id);
  console.log(page);
  return {
    props: {
      data,
      page,
    },
  };
}

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage({ data, page }) {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.props.Name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
      <Blocks blocks={page.blocks} />
    </div>
  );
}
