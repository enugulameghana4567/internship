import React, { useState } from "react";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const [page, setPage] = useState("aptitude");
  const [score, setScore] = useState(0);

  const submitExam = () => {
    let s = 0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "B") s++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "B") s++;
    setScore(s);
    setPage("results");
  };

  const section = (title, videos) => (
    <div className="card">
      <h2 className="section-title">{title}</h2>
      <div className="video-grid">
        {videos.map((id) => (
          <div className="video-card" key={id}>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
              title={id}
            />
            <div className="video-actions">
              <button>⚙</button>
              <button>⏸</button>
              <button>▶</button>
              <a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">
                ⬇
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <p>Classes</p>
        <button onClick={() => setPage("reasoning")}>Reasoning</button>
        <button onClick={() => setPage("aptitude")}>Aptitude</button>
        <button onClick={() => setPage("english")}>English</button>
        <button onClick={() => setPage("coding")}>Coding</button>

        <button onClick={() => setPage("materials")}>Materials</button>

        <p>Exam</p>
        <button onClick={() => setPage("daily")}>Daily Exam</button>
        <button onClick={() => setPage("weekly")}>Weekly Exam</button>
        <button onClick={() => setPage("grand")}>Grand Test</button>

        <button onClick={() => setPage("results")}>Results / Score</button>
        <button onClick={() => setPage("applied")}>
          Applied Jobs / Internships
        </button>
        <button onClick={() => setPage("jobs")}>Available Opportunities</button>
      </aside>

      {/* Content */}
      <main className="content">
        {page === "aptitude" &&
          section("Aptitude", ["Fb0B_32dTYg", "27hKBjXSnpk"])}

        {page === "reasoning" &&
          section("Reasoning", ["D1ZJyiQVqFs", "ywT5Qeh1EPk"])}

        {page === "english" &&
          section("English", ["OGz55u94tyw", "bQoWe8vGM7I"])}

        {page === "coding" &&
          section("Coding", ["-C88r0niLQQ", "mG4NLNZ37y4"])}

        {page === "materials" && (
          <div className="card">
            <h2>Study Materials</h2>
            {[
              ["English - Theme Detection", "ENGLISH.pdf"],
              ["Reasoning - Blood Relations", "REASONING.pdf"],
              ["Aptitude - Ratio & Proportion", "APTITUDE.pdf"],
            ].map(([name, file]) => (
              <div className="material" key={file}>
                <span>{name}</span>
                <a className="btn" href={`/${file}`} download>
                  Download
                </a>
              </div>
            ))}
          </div>
        )}

        {(page === "daily" || page === "weekly" || page === "grand") && (
          <div className="card">
            <h2>Mock Test</h2>
            <p>1. Antonym of EPHEMERAL?</p>
            <label>
              <input type="radio" name="q1" value="A" /> Short-lived
            </label>
            <label>
              <input type="radio" name="q1" value="B" /> Permanent
            </label>

            <p>2. Which data structure is LIFO?</p>
            <label>
              <input type="radio" name="q2" value="A" /> Queue
            </label>
            <label>
              <input type="radio" name="q2" value="B" /> Stack
            </label>

            <button className="btn" onClick={submitExam}>
              Submit
            </button>
          </div>
        )}

        {page === "results" && (
          <div className="card center">
            <h2>Your Score</h2>
            <p className="score">{score} / 2</p>
          </div>
        )}

        {page === "applied" && (
          <div className="card">
            <h2>Applied Jobs</h2>
            <p>Google - Software Intern</p>
            <p>Microsoft - Python Developer</p>
            <p>Capgemini - Data Analyst</p>
            <p>Amazon - Fullstack Developer</p>
            <p>IBM - Junior Engineer</p>
          </div>
        )}

        {page === "jobs" && (
          <div className="card">
            <h2>Available Opportunities</h2>
            <table>
              <tbody>
                {[
                  ["Microsoft", "Python / Java"],
                  ["Google", "Data Analyst"],
                  ["Capgemini", "Java Developer"],
                ].map(([c, r]) => (
                  <tr key={c}>
                    <td>{c}</td>
                    <td>{r}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => alert("Application Submitted!")}
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}