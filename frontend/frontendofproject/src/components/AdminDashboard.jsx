import { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [page, setPage] = useState("dashboard");

  const [students] = useState([
    { name: "Mahesh", a: 20, r: 18, e: 17, c: 19 },
    { name: "Nikitha", a: 18, r: 19, e: 16, c: 17 },
    { name: "Meghana", a: 15, r: 14, e: 13, c: 16 },
    { name: "Swapna", a: 12, r: 13, e: 11, c: 14 },
    { name: "Sita", a: 10, r: 11, e: 12, c: 9 }
  ]);

  const [videos, setVideos] = useState({
    aptitude: [
      "https://www.youtube.com/embed/Fb0B_32dTYg",
      "https://www.youtube.com/embed/27hKBjXSnpk"
    ],
    reasoning: [
      "https://www.youtube.com/embed/D1ZJyiQVqFs",
      "https://www.youtube.com/embed/ywT5Qeh1EPk"
    ],
    english: [
      "https://www.youtube.com/embed/OGz55u94tyw",
      "https://www.youtube.com/embed/bQoWe8vGM7I"
    ],
    coding: [
      "https://www.youtube.com/embed/-C88r0niLQQ",
      "https://www.youtube.com/embed/mG4NLNZ37y4"
    ]
  });

  const [files, setFiles] = useState({
    materials: [],
    exams: [],
    opportunities: []
  });

  const addVideo = (section) => {
    const link = prompt("Paste YouTube link:");
    if (!link) return;
    const embed = link.replace("watch?v=", "embed/");
    setVideos({
      ...videos,
      [section]: [...videos[section], embed]
    });
  };

  const addFile = (type) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.onchange = () => {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      setFiles({
        ...files,
        [type]: [...files[type], { name: file.name, url }]
      });
    };
    input.click();
  };

  const exportExcel = () => {
    let csv = "Rank,Name,Total\n";
    const ranked = students
      .map(s => ({ ...s, total: s.a + s.r + s.e + s.c }))
      .sort((a, b) => b.total - a.total);

    ranked.forEach((s, i) => {
      csv += `${i + 1},${s.name},${s.total}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Shortlist.csv";
    a.click();
  };

  const rankedStudents = students
    .map(s => ({ ...s, total: s.a + s.r + s.e + s.c }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>

        <a onClick={() => setPage("dashboard")}>Dashboard</a>

        <a>Classes</a>
        <div className="submenu">
          <a onClick={() => setPage("aptitude")}>Aptitude</a>
          <a onClick={() => setPage("reasoning")}>Reasoning</a>
          <a onClick={() => setPage("english")}>English</a>
          <a onClick={() => setPage("coding")}>Coding</a>
        </div>

        <a onClick={() => setPage("materials")}>Materials</a>
        <a onClick={() => setPage("exams")}>Exams</a>
        <a onClick={() => setPage("results")}>Results</a>
        <a onClick={() => setPage("shortlist")}>Shortlist</a>
        <a onClick={() => setPage("opportunities")}>Opportunities</a>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <div className="admin-card">

          {page === "dashboard" && <h2>Welcome Admin</h2>}

          {["aptitude", "reasoning", "english", "coding"].includes(page) && (
            <>
              <div className="section-header">
                <h2>{page.toUpperCase()}</h2>
                <button className="btn" onClick={() => addVideo(page)}>+ Add Video</button>
              </div>

              <div className="video-grid">
                {videos[page].map((v, i) => (
                  <div className="video-card" key={i}>
                    <iframe src={v} allowFullScreen />
                  </div>
                ))}
              </div>
            </>
          )}

          {["materials", "exams", "opportunities"].includes(page) && (
            <>
              <div className="section-header">
                <h2>{page.toUpperCase()}</h2>
                <button className="btn" onClick={() => addFile(page)}>+ Upload</button>
              </div>
              <ul className="file-list">
                {files[page].map((f, i) => (
                  <li key={i}>
                    <a href={f.url} target="_blank" rel="noreferrer">{f.name}</a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {page === "results" && (
            <>
              <h2>Results</h2>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th><th>Name</th><th>A</th><th>R</th>
                    <th>E</th><th>C</th><th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {rankedStudents.map((s, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{s.name}</td>
                      <td>{s.a}</td>
                      <td>{s.r}</td>
                      <td>{s.e}</td>
                      <td>{s.c}</td>
                      <td>{s.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {page === "shortlist" && (
            <>
              <div className="section-header">
                <h2>Shortlisted</h2>
                <button className="btn" onClick={exportExcel}>Download Excel</button>
              </div>
              <table>
                <thead>
                  <tr><th>Rank</th><th>Name</th><th>Total</th></tr>
                </thead>
                <tbody>
                  {rankedStudents.map((s, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{s.name}</td>
                      <td>{s.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
