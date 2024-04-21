import React, { useState } from "react";

const LivePoll = () => {
  const [votes, setVotes] = useState({ gpt3: 0, gptNeo: 0, gptJ: 0 });

  const handleVote = (model) => {
    setVotes((prevVotes) => ({ ...prevVotes, [model]: prevVotes[model] + 1 }));
  };

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-3">Live Poll: GPT of the Month</h2>
      <div>
        <button onClick={() => handleVote("gpt3")} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Vote GPT-3
        </button>
        <button onClick={() => handleVote("gptNeo")} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ml-2">
          Vote GPT-Neo
        </button>
        <button onClick={() => handleVote("gptJ")} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-2">
          Vote GPT-J
        </button>
      </div>
      <div className="mt-4">
        <p>GPT-3 Votes: {votes.gpt3}</p>
        <p>GPT-Neo Votes: {votes.gptNeo}</p>
        <p>GPT-J Votes: {votes.gptJ}</p>
      </div>
    </div>
  );
};

export default LivePoll;
