import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

// Accordion Component - Interactive FAQ with single/multi selection modes
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // Handle single selection - collapse if same item clicked
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // Handle multi selection - toggle items in/out of array
  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };
  return (
    <div className="wrapper">
      <h2>Accordion</h2>

      {/* Mode Toggle Button - Switches between single and multi selection */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>

      <div className="accordion">
        {/* Render accordion items from imported data */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              {/* Clickable header with question and expand indicator */}
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span> {/* Visual indicator for expandable content */}
              </div>

              {/* Conditional content rendering based on selection mode */}
              {enableMultiSelection
                ? // Multi-mode: Show if item is in the multiple array
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : // Single-mode: Show only if this item is the selected one
                  selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          // Fallback message if no data is available
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
