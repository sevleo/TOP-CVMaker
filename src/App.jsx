import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    summary: "",
  });

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    console.log(profile);
  };

  const handleSummaryChange = (value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      summary: value,
    }));
    console.log(profile);
  };

  return (
    <>
      <main>
        <ContactSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <Summary onProfileChange={handleSummaryChange} />
        <div className="linebreak"></div>
        <Experience />
        <div className="linebreak"></div>
        <Education />
        <div className="linebreak"></div>
      </main>
    </>
  );
}

export default App;
