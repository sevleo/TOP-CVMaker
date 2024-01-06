import Input from "./Input";
import Button from "./Button";
import "../styles/LanguagesSection.css";

export default function LanguagesSection({
  languages,
  addItem,
  removeItem,
  onChange,
}) {
  function addLanguage() {
    const newLanguage = {
      id: Math.random(),
      name: "",
    };
    addItem("languages", newLanguage);
  }

  return (
    <div className="language-section">
      <p>Languages</p>
      {languages.map((language, index) => (
        <div key={language.id} className="language">
          <Input
            label="Language"
            placeholder="Language"
            className="language name"
            value={language.name}
            onChange={(value) => onChange(index, "name", value, "languages")}
          />
          <Button
            label="Remove"
            className="remove-language"
            onClick={() => {
              removeItem("languages", language);
            }}
          />
        </div>
      ))}
      <Button
        label="Add language"
        className="add-language"
        onClick={() => {
          addLanguage();
        }}
      />
    </div>
  );
}
