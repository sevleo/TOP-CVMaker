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
    educations: [
      {
        id: Math.random(),
        degree: "",
        school: "",
        from: "",
        to: "",
        location: "",
      },
    ],
    skills: [],
  });

  const handleFieldChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    console.log(profile);
  };

  function handleListChange(index, fieldName, value, arrayName) {
    const updatedExperiences = [...profile[arrayName]];
    updatedExperiences[index][fieldName] = value;
    handleFieldChange(arrayName, updatedExperiences);
  }

  const addItem = (arrayName, newItem) => {
    const updatedProfile = {
      ...profile,
      [arrayName]: [...profile[arrayName], newItem],
    };
    setProfile(updatedProfile);
  };

  const removeItem = (arrayName, item) => {
    const updatedItems = profile[arrayName].filter((i) => i.id !== item.id);
    const updatedProfile = {
      ...profile,
      [arrayName]: updatedItems,
    };
    setProfile(updatedProfile);
  };

  return (
    <>
      <main>
        <ContactSection onFieldChange={handleFieldChange} />
        <div className="linebreak"></div>
        <Summary onFieldChange={handleFieldChange} />
        <div className="linebreak"></div>
        <ExperienceSection
          experiences={profile.experiences}
          addItem={addItem}
          removeItem={removeItem}
          onChange={handleListChange}
        />
        <div className="linebreak"></div>
        <EducationSection
          educations={profile.educations}
          addItem={addItem}
          removeItem={removeItem}
          onChange={handleListChange}
        />
        <div className="linebreak"></div>
        <SkillsSection
          skills={profile.skills}
          addItem={addItem}
          removeItem={removeItem}
          onChange={handleListChange}
        />
        <div className="linebreak"></div>
      </main>
    </>
  );
}

export default App;
