import React, { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/data/subjects.json")
      .then((res) => res.json())
      .then(setSubjects);
  }, []);

  return (
    <section>
      <h2>Subjects</h2>
      <div className="grid">
        {subjects.map((sub) => (
          <SubjectCard key={sub.id} data={sub} />
        ))}
      </div>
    </section>
  );
}
