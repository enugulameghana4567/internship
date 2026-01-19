import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import "./ResumeScreening.css";

export default function ResumeScreening() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("📁 Drop Resume PDF here or Click to Browse");
  const [showBtn, setShowBtn] = useState(false);
  const [score, setScore] = useState(0);
  const [foundSkills, setFoundSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [advice, setAdvice] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setFileName("Ready: " + f.name);
      setShowBtn(true);
    }
  };

  const processResume = async () => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((s) => s.str).join(" ");
      }
      analyzeSkills(text);
    };
    reader.readAsArrayBuffer(file);
  };

  const analyzeSkills = (text) => {
    const marketSkills = [
      "JavaScript", "Python", "React", "Node.js", "SQL", "AWS",
      "Docker", "Git", "TypeScript", "Agile", "API Design",
      "Unit Testing", "System Design"
    ];

    const resumeText = text.toLowerCase();
    const found = [];
    const missing = [];

    marketSkills.forEach((skill) => {
      resumeText.includes(skill.toLowerCase())
        ? found.push(skill)
        : missing.push(skill);
    });

    const sc = Math.round((found.length / marketSkills.length) * 100);
    setScore(sc);
    setFoundSkills(found);
    setMissingSkills(missing);
    setShowResult(true);

    if (sc < 40) {
      setAdvice(`Focus on learning ${missing.slice(0, 3).join(", ")} to improve ATS score.`);
    } else if (sc < 70) {
      setAdvice(`Good progress! Add projects using ${missing[0]} and ${missing[1]}.`);
    } else {
      setAdvice("Excellent resume! Add measurable achievements to stand out.");
    }
  };

  return (
    <div className="ats-container">
      <h2>Resume Career Accelerator</h2>
      <p>Upload your resume to analyze ATS compatibility</p>

      <div
        className="upload-zone"
        onClick={() => document.getElementById("fileInput").click()}
      >
        {fileName}
        <input
          id="fileInput"
          type="file"
          accept=".pdf"
          hidden
          onChange={handleFile}
        />
      </div>

      {showBtn && (
        <button className="analyze-btn" onClick={processResume}>
          Identify Skill Gaps
        </button>
      )}

      {showResult && (
        <>
          <div className="score-box">
            <span>ATS Compatibility Score</span>
            <div className="score-circle">{score}%</div>
          </div>

          <div className="skill-grid">
            <div>
              <p className="found-title">Skills You Have</p>
              {foundSkills.map((s) => (
                <span key={s} className="skill-tag green">{s}</span>
              ))}
            </div>

            <div>
              <p className="missing-title">Skills to Develop</p>
              {missingSkills.map((s) => (
                <span key={s} className="skill-tag red">{s}</span>
              ))}
            </div>
          </div>

          <div className="advice-box">
            <strong>Pro Tip:</strong>
            <p>{advice}</p>
          </div>
        </>
      )}
    </div>
  );
}
