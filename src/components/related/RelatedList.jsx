import React, { useState, useEffect } from 'react';
import { getRelated } from './api.js';
import Card from './Card.jsx';

export default function RelatedList() {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    getRelated(37311).then((res) => setRelated(res));
  }, []);

  return (
    <div className="related">
      <Card id={37312} />
    </div>
  );
}
