import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "../styles/EducationSection.css";

export default function EducationSection({
  educations,
  addItem,
  removeItem,
  onChange,
}) {
  function addEducation() {
    const newEducation = {
      id: Math.random(),
      degree: "",
      school: "",
      from: "",
      to: "",
      location: "",
    };
    addItem("educations", newEducation);
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
            onChange={(value) => onChange(index, "degree", value, "educations")}
          />
          <Input
            label="School"
            placeholder="School"
            className="education school"
            value={education.school}
            onChange={(value) => onChange(index, "school", value, "educations")}
          />
          <Input
            label="From"
            placeholder="From"
            className="education from"
            type="date"
            value={education.from}
            onChange={(value) => onChange(index, "from", value, "educations")}
          />
          <Input
            label="To"
            placeholder="To"
            className="education to"
            type="date"
            value={education.to}
            onChange={(value) => onChange(index, "to", value, "educations")}
          />
          <Input
            label="Location"
            placeholder="Location"
            className="education location"
            value={education.location}
            onChange={(value) =>
              onChange(index, "location", value, "educations")
            }
          />
          <Button
            className="remove-education"
            onClick={() => removeItem("educations", education)}
            label="Remove"
          />
        </div>
      ))}

      <Button
        label="Add education"
        className="add-education"
        onClick={() => {
          addEducation();
        }}
      />
    </div>
  );
}
