import { Link } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="getstarted-body">
      <Link to="/role-select">
        <div className="card-container">
          <div className="card-image">
            <h1>Get Started</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GetStarted;
