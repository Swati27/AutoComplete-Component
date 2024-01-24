import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

function AutoComplete({ options = ["Orange", "Apple", "Pearl", "Pomegranate"] }) {
  const [fruitVal, setFruitVal] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(fruitVal?.toLowerCase())
  );// 

  const handleInput = (e) => {
    setFruitVal(e.target.value);
  };

  const handleSuggestions = (suggestion) => {
    setFruitVal(suggestion);
    setShowSuggestions(false)
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        border: "1px solid pink",
        borderRadius: "10px",
      }}
    >
      <input
        style={{
          width: "100%",
          border: "none",
          margin: "10px 0",
          fontSize: "16px",
          padding: "10px 10px 0 10px"
        }}
        placeholder="fruits"
        value={fruitVal}
        onChange={(e) => handleInput(e)}
        onFocus={() => setShowSuggestions(true)}
      ></input>
      {showSuggestions && (
        <ul style={{listStyle:'none', margin: '0px', padding: '0px', borderTop: "1px solid pink", backgroundColor: 'pink'}}>
          {suggestions.map((suggestion, index) => {
            return <li style={{cursor: 'pointer', padding: '10px'}} key={index} onClick={()=> handleSuggestions(suggestion)}>{suggestion}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
