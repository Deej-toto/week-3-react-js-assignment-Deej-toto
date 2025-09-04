import React, { useState } from 'react';

const quotes = [
  "The journey of a thousand miles begins with a single step.",
  "Life is what happens when you're busy making other plans.",
  "In the end, we only regret the chances we didn't take.",
  "Believe you can and you're halfway there.",
  "Happiness depends upon ourselves.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal.",
  "The best time to plant a tree was 20 years ago. The second best time is now."
];

const MyComponent = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [prevQuote, setPrevQuote] = useState('');
  const [history, setHistory] = useState([]); // stores all previous quotes

  const getRandomQuote = () => {
    setPrevQuote(quote); // store current quote as previous
    setHistory((prev) => [quote, ...prev]); // add current quote to history
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Daily Quote</h1>

      {prevQuote && (
        <p className="text-gray-400 mb-2">
          Previous: "{prevQuote}"
        </p>
      )}

      <p className="text-gray-300">{quote}</p>

      <button
        onClick={getRandomQuote}
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        New Quote
      </button>

      {history.length > 0 && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-inner max-h-80 overflow-y-auto">
          <h2 className="text-xl font-bold mb-3">Quote History</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {history.map((q, index) => (
              <li key={index} className="p-2 hover:bg-gray-600 rounded">
                "{q}"
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
