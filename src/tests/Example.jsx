import React, { useState } from 'react';

export default function Example({ text }) {
  // state to store whether the text should be displayed or not
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h1>Example!</h1>
      {/* Button that edits the display state */}
      <button type="button" onClick={() => setDisplay(true)}>click me!</button>

      {/* Conditionally render the `text` prop */}
      {display && <p>{text}</p>}
    </div>
  );
}
