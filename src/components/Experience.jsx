import { useState } from "react";
import Input from "./Input";
import AddButton from "./AddButton";
import "../styles/Experience.css";

export default function Experience() {
  const [experiences, setExperiences] = useState([
    {
      id: Math.random(),
      title: "",
      company: "",
      from: "",
      to: "",
      location: "",
      responsibilities: "",
    },
  ]);

  function addExperience() {
    const newExperience = {
      id: Math.random(),
      title: "",
      company: "",
      from: "",
      to: "",
      location: "",
      responsibilities: "",
    };
    setExperiences([...experiences, newExperience]);
  }

  function onExperienceChange(index, fieldName, value) {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][fieldName] = value;
    setExperiences(updatedExperiences);
  }

  return (
    <div className="experience-section">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="experience">
          <Input
            label="title"
            placeholder="title"
            className="experience title"
            value={experience.title}
            onChange={(value) => onExperienceChange(index, "title", value)}
          />
          <Input
            label="company"
            placeholder="company"
            className="experience company"
            value={experience.company}
            onChange={(value) => onExperienceChange(index, "company", value)}
          />
          <Input
            label="from"
            placeholder="from"
            className="experience from"
            type="date"
            value={experience.from}
            onChange={(value) => onExperienceChange(index, "from", value)}
          />
          <Input
            label="to"
            placeholder="to"
            className="experience to"
            type="date"
            value={experience.to}
            onChange={(value) => onExperienceChange(index, "to", value)}
          />
          <Input
            label="location"
            placeholder="location"
            className="experience location"
            value={experience.location}
            onChange={(value) => onExperienceChange(index, "location", value)}
          />
          <Input
            label="responsibilities"
            placeholder="responsibilities"
            className="experience responsibilities"
            value={experience.responsibilities}
            onChange={(value) =>
              onExperienceChange(index, "responsibilities", value)
            }
          />
        </div>
      ))}
      <AddButton
        label="test"
        className="add-experience"
        onClick={addExperience}
      />
    </div>
  );
}
