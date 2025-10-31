import React, { useEffect, useState } from "react";
import ObjectCard from "../components/ObjectCard";

export default function ObjectsPage() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch("/data/objects.json")
      .then((res) => res.json())
      .then(setObjects);
  }, []);

  return (
    <section>
      <h2>Objects</h2>
      <div className="grid">
        {objects.map((obj) => (
          <ObjectCard key={obj.id} data={obj} />
        ))}
      </div>
    </section>
  );
}
