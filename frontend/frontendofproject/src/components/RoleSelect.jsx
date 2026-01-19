import React from "react";

export default function RoleSelection() {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        {/* LEFT */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            Placement & Internship <br /> Management Portal
          </h1>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <h3 style={styles.heading}>I AM</h3>

          <div style={styles.cards}>
            <div
              style={styles.card}
              onClick={() => (window.location.href = "/student-login")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                alt="Student"
                style={styles.image}
              />
              <p style={styles.roleText}>STUDENT</p>
            </div>

            <div
              style={styles.card}
              onClick={() => (window.location.href = "/admin-login")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt="Admin"
                style={styles.image}
              />
              <p style={styles.roleText}>ADMIN</p>
            </div>
          </div>

          <div style={styles.footer}>@MAGNICS</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #0b2b52, #020617)",
    fontFamily: "Montserrat, sans-serif",
  },

  wrapper: {
    width: "90%",
    height: "85%",
    display: "flex",
    borderRadius: "26px",
    overflow: "hidden",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    background: "#ffffff",
  },

  left: {
    width: "50%",
    background: "linear-gradient(160deg, #0b2b52, #123d73)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    textAlign: "center",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "1.3",
  },

  right: {
    width: "50%",
    background: "linear-gradient(160deg, #7aa7f7, #5b8def)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "50px",
    color: "#0b2b52",
    fontWeight: "700",
  },

  cards: {
    display: "flex",
    gap: "40px",
  },

  card: {
    background: "white",
    width: "200px",
    padding: "28px",
    borderRadius: "18px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 20px 35px rgba(0,0,0,0.25)",
    transition: "0.3s ease",
  },

  image: {
    width: "110px",
    marginBottom: "15px",
  },

  roleText: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#0b2b52",
  },

  footer: {
    position: "absolute",
    bottom: "15px",
    right: "25px",
    fontWeight: "600",
    color: "#0b2b52",
    opacity: 0.8,
  },
};