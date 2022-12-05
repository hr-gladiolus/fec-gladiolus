import React, { useState, useEffect } from 'react';
import { getRelated } from './api.js';
import Card from './Card.jsx';

export default function RelatedList() {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    // get related products for a random product
    getRelated(37311).then((res) => setRelated(res));
  }, []);

  return (
    <div className="related">
      {/* temporarily render a random product card */}
      <Card id={37313} />
    </div>
  );
}
