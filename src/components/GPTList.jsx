import React from 'react';
import { Link } from 'react-router-dom';

const GPTList = ({ gpts }) => {
  return (
    <ul>
      {gpts.map(gpt => (
        <li key={gpt.id}>
          <Link to={`/gpt/${gpt.id}`}>{gpt.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GPTList;