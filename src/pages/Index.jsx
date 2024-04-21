import { useState } from "react";
import { FaStar, FaGithub, FaRegThumbsUp, FaRegThumbsDown, FaTrophy } from "react-icons/fa";

const Index = () => {
  const [models, setModels] = useState([
    { id: 1, name: "GPT-3", description: "An autoregressive language model that uses deep learning to produce human-like text.", rating: 4.5 },
    { id: 2, name: "GPT-Neo", description: "A GPT-3 alternative that is open source and designed to be scalable.", rating: 4.2 },
    { id: 3, name: "GPT-J", description: "A large-scale, autoregressive language model with a similar architecture to GPT-3.", rating: 4.7 },
  ]);

  const [selectedModel, setSelectedModel] = useState(null);

  const handleSelectModel = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="text-center p-5">
        <h1 className="text-4xl font-bold">GPT Model Awards</h1>
        <p className="text-xl mt-2">Review and compare GPT models like a red carpet event!</p>
      </header>

      <main className="flex justify-center items-start mt-10">
        <div className="w-1/3">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-5">GPT Models</h2>
          <ul>
            {models.map((model) => (
              <li key={model.id} className="mb-4 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700" onClick={() => handleSelectModel(model)}>
                <h3 className="text-2xl font-semibold">
                  {model.name} <FaTrophy className="inline text-yellow-400" />
                </h3>
                <p>{model.description}</p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400" />
                  <span className="ml-1">{model.rating}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 pl-10">
          {selectedModel ? (
            <div className="bg-gray-800 p-5 rounded-lg">
              <h2 className="text-3xl font-bold">{selectedModel.name} Details</h2>
              <p className="mt-2">{selectedModel.description}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400" />
                <span className="ml-1 text-xl">{selectedModel.rating}</span>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <FaRegThumbsUp className="mr-2" /> Approve
                </button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-4">
                  <FaRegThumbsDown className="mr-2" /> Disapprove
                </button>
              </div>
              <a href={`https://github.com/gptstore-data-backup/${selectedModel.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                <FaGithub className="inline mr-2" /> View on GitHub
              </a>
            </div>
          ) : (
            <p className="text-xl">Select a model to view details.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
