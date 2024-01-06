import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
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

  function removeExperience(experience) {
    const updatedExperiences = experiences.filter((exp) => exp !== experience);
    setExperiences(updatedExperiences);
  }

  function onExperienceChange(index, fieldName, value) {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][fieldName] = value;
    setExperiences(updatedExperiences);
  }

  return (
    <div className="experience-section">
      <p>Job Experience</p>
      {experiences.map((experience, index) => (
        <div key={experience.id} className="experience">
          <Input
            label="Title"
            placeholder="Title"
            className="experience title"
            value={experience.title}
            onChange={(value) => onExperienceChange(index, "title", value)}
          />
          <Input
            label="Company"
            placeholder="Company"
            className="experience company"
            value={experience.company}
            onChange={(value) => onExperienceChange(index, "company", value)}
          />
          <Input
            label="From"
            placeholder="From"
            className="experience from"
            type="date"
            value={experience.from}
            onChange={(value) => onExperienceChange(index, "from", value)}
          />
          <Input
            label="To"
            placeholder="To"
            className="experience to"
            type="date"
            value={experience.to}
            onChange={(value) => onExperienceChange(index, "to", value)}
          />
          <Input
            label="Location"
            placeholder="Location"
            className="experience location"
            value={experience.location}
            onChange={(value) => onExperienceChange(index, "location", value)}
          />
          <Input
            label="Responsibilities"
            placeholder="Responsibilities"
            className="experience responsibilities"
            value={experience.responsibilities}
            onChange={(value) =>
              onExperienceChange(index, "responsibilities", value)
            }
          />
          <Button
            label="Remove"
            className="remove-experience"
            onClick={() => removeExperience(experience)}
          />
        </div>
      ))}
      <Button
        label="Add experience"
        className="add-experience"
        onClick={addExperience}
      />
    </div>
  );
}
