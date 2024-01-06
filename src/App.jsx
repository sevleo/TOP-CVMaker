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

  const addExperience = () => {
    const newExperience = {
      id: Math.random(),
      title: "",
      company: "",
      from: "",
      to: "",
      location: "",
      responsibilities: "",
    };
    const updatedProfile = {
      ...profile,
      experiences: [...profile.experiences, newExperience],
    };
    setProfile(updatedProfile);
  };

  const removeExperience = (experience) => {
    const updatedExperiences = profile.experiences.filter(
      (exp) => exp.id !== experience.id
    );
    const updatedProfile = {
      ...profile,
      experiences: updatedExperiences,
    };
    setProfile(updatedProfile);
  };

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
        <ExperienceSection
          experiences={profile.experiences}
          addExperience={addExperience}
          removeExperience={removeExperience}
          onProfileChange={handleProfileChange}
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
