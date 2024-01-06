import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";
import Summary from "./components/Summary";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    summary: "",
    experiences: [],
    educations: [],
  });

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    console.log(profile);
  };

  return (
    <>
      <main>
        <ContactSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <Summary onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <ExperienceSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <EducationSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
      </main>
    </>
  );
}

export default App;
