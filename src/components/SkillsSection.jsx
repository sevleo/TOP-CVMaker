import Input from "./Input";
import Button from "./Button";
import "../styles/SkillsSection.css";

export default function SkillsSection({
  skills,
  addItem,
  removeItem,
  onChange,
}) {
  function addSkill() {
    const newSkill = {
      id: Math.random(),
      name: "",
    };
    addItem("skills", newSkill);
  }

  return (
    <div className="skill-section">
      <p>Skills</p>
      {skills.map((skill, index) => (
        <div key={skill.id} className="skill">
          <Input
            label="Skill"
            placeholder="Skill"
            className="skill name"
            value={skill.name}
            onChange={(value) => onChange(index, "name", value, "skills")}
          />
          <Button
            label="Remove"
            className="remove-skill"
            onClick={() => {
              removeItem("skills", skill);
            }}
          />
        </div>
      ))}
      <Button
        label="Add skill"
        className="add-skill"
        onClick={() => {
          addSkill();
        }}
      />
    </div>
  );
}
