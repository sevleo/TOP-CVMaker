import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "../styles/EducationSection.css";

export default function EducationSection({ onProfileChange }) {
  const [educations, setEducations] = useState([
    {
      id: Math.random(),
      degree: "",
      school: "",
      from: "",
      to: "",
      location: "",
    },
  ]);

  function addEducation() {
    const newEducation = {
      id: Math.random(),
      degree: "",
      school: "",
      from: "",
      to: "",
      location: "",
    };
    const updatedEducations = [...educations, newEducation];
    setEducations(updatedEducations);
    onProfileChange("educations", updatedEducations);
  }

  function removeEducation(education) {
    const updatedEducations = educations.filter((edu) => edu !== education);
    setEducations(updatedEducations);
    onProfileChange("educations", updatedEducations);
  }

  function onEducationChange(index, field, value) {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
    onProfileChange("educations", updatedEducations);
  }

  return (
    <div className="education-section">
      <p>Education</p>

      {educations.map((education, index) => (
        <div key={education.id} className="education">
          <Input
            label="Degree"
            placeholder="Degree"
            className="education degree"
            value={education.degree}
            onChange={(value) => onEducationChange(index, "degree", value)}
          />
          <Input
            label="School"
            placeholder="School"
            className="education school"
            value={education.school}
            onChange={(value) => onEducationChange(index, "school", value)}
          />
          <Input
            label="From"
            placeholder="From"
            className="education from"
            type="date"
            value={education.from}
            onChange={(value) => onEducationChange(index, "from", value)}
          />
          <Input
            label="To"
            placeholder="To"
            className="education to"
            type="date"
            value={education.to}
            onChange={(value) => onEducationChange(index, "to", value)}
          />
          <Input
            label="Location"
            placeholder="Location"
            className="education location"
            value={education.location}
            onChange={(value) => onEducationChange(index, "location", value)}
          />
          <Button
            className="remove-education"
            onClick={() => removeEducation(education)}
            label="Remove"
          />
        </div>
      ))}

      <Button
        label="Add education"
        className="add-education"
        onClick={addEducation}
      />
    </div>
  );
}
