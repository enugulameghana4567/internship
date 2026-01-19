def chatbot_reply(msg):
    msg = msg.lower()

    if "eligibility" in msg:
        return "Minimum 60% with no backlogs."
    if "skills" in msg:
        return "Learn DSA, Python, SQL, React."
    if "internship" in msg:
        return "Internships are 2–6 months."

    return "Ask about placements, skills, or internships."
