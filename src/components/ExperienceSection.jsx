import Input from "./Input";
import Button from "./Button";
import "../styles/ExperienceSection.css";

export default function ExperienceSection({
  experiences,
  addItem,
  removeItem,
  onChange,
}) {
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
    addItem("experiences", newExperience);
  }

  return (
    <div className="experience-section">
      <p>02 Job Experience</p>
      {experiences.map((experience, index) => (
        <div key={experience.id} className="experience">
          <div className="dates">
            <Input
              label="From"
              placeholder="From"
              className="experience-from"
              type="date"
              value={experience.from}
              onChange={(value) =>
                onChange(index, "from", value, "experiences")
              }
            />
            <Input
              label="To"
              placeholder="To"
              className="experience-to"
              type="date"
              value={experience.to}
              onChange={(value) => onChange(index, "to", value, "experiences")}
            />
          </div>
          <div className="experience-details">
            <div className="experience-title-company-location">
              <Input
                label="Title"
                placeholder="Title"
                className="experience-title"
                value={experience.title}
                onChange={(value) =>
                  onChange(index, "title", value, "experiences")
                }
              />
              <Input
                label="Company"
                placeholder="Company"
                className="experience-company"
                value={experience.company}
                onChange={(value) =>
                  onChange(index, "company", value, "experiences")
                }
              />
              <Input
                label="Location"
                placeholder="Location"
                className="experience-location"
                value={experience.location}
                onChange={(value) =>
                  onChange(index, "location", value, "experiences")
                }
              />
            </div>

            <Input
              rows="6"
              maxlength="300"
              type="textarea"
              label="Responsibilities"
              placeholder="Responsibilities"
              className="experience-responsibilities"
              value={experience.responsibilities}
              onChange={(value) =>
                onChange(index, "responsibilities", value, "experiences")
              }
            />
          </div>
          <Button
            label="Remove"
            className="remove-experience"
            onClick={() => {
              removeItem("experiences", experience);
            }}
          />
        </div>
      ))}
      <Button
        label="Add experience"
        className="add-experience"
        onClick={() => {
          addExperience();
        }}
      />
    </div>
  );
}
