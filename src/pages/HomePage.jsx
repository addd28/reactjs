import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [objects, setObjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // Lấy dữ liệu từ file JSON trong public/data/
  useEffect(() => {
    fetch("data/objects.json")
      .then((res) => res.json())
      .then((data) => setObjects(data));

    fetch("data/subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <div className="homepage">
      {/* --- Banner --- */}
      <section className="banner">
        <img src="image/banner-fpt.png" alt="FPT Aptech Banner" />
      </section>

      {/* --- Who should learn --- */}
      <section className="section">
        <h2>SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?</h2>
        <div className="cards">
          {objects.map((obj) => (
            <div key={obj.id} className="card">
              <img src={obj.image} alt={obj.title} />
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Course program --- */}
      <section className="section">
        <h2>WHAT IS THE COURSE PROGRAM?</h2>
        <div className="cards subjects">
          {subjects.map((sub) => (
            <div key={sub.id} className="card subject-card">
              <img src={sub.image} alt={sub.subject} />
              <h3>{sub.subject}</h3>
              <p>{sub.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer nhỏ --- */}
      <footer className="footer-bottom">
        <p>No 8 - Ton That Thuy - My Dinh, Nam Tu Liem, Ha Noi</p>
      </footer>
    </div>
  );
}

export default HomePage;
