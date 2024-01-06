import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";
import Summary from "./components/Summary";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    summary: "",
    experiences: [
      {
        id: Math.random(),
        title: "",
        company: "",
        from: "",
        to: "",
        location: "",
        responsibilities: "",
      },
    ],
    educations: [],
    skills: [],
  });

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    console.log(profile);
  };

  const addItem = (arrayName, newItem) => {
    const updatedProfile = {
      ...profile,
      [arrayName]: [...profile[arrayName], newItem],
    };
    setProfile(updatedProfile);
  };

  const removeExperience = (arrayName, item) => {
    const updatedItems = profile[arrayName].filter((i) => i.id !== item.id);
    const updatedProfile = {
      ...profile,
      [arrayName]: updatedItems,
    };
    setProfile(updatedProfile);
  };

  function handleExperienceChange(index, fieldName, value) {
    const updatedExperiences = [...profile.experiences];
    updatedExperiences[index][fieldName] = value;
    handleProfileChange("experiences", updatedExperiences);
  }

  return (
    <>
      <main>
        <ContactSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <Summary onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <ExperienceSection
          experiences={profile.experiences}
          addItem={addItem}
          removeExperience={removeExperience}
          onExperienceChange={handleExperienceChange}
        />
        <div className="linebreak"></div>
        <EducationSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
        <SkillsSection onProfileChange={handleProfileChange} />
        <div className="linebreak"></div>
      </main>
    </>
  );
}

export default App;
