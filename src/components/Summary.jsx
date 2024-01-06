import Input from "./Input";
import "../styles/SummarySection.css";

export default function Summary({ onFieldChange }) {
  return (
    <div className="summary-section">
      <p>Professional Summary</p>
      <Input
        label="Summary"
        placeholder="Summary of your experience"
        className="summary"
        type="textarea"
        rows="4"
        maxlength="300"
        onChange={(value) => {
          onFieldChange("summary", value);
        }}
      />
    </div>
  );
}
