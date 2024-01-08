import Input from "./Input";
import "../styles/SummarySection.css";

export default function Summary({ onFieldChange, summary }) {
  return (
    <div className="summary-section">
      <p>01 Professional Summary</p>
      <Input
        label="Summary"
        placeholder="Summary of your experience"
        className="summary"
        type="textarea"
        rows="4"
        maxlength="300"
        value={summary}
        onChange={(value) => {
          onFieldChange("summary", value);
        }}
      />
    </div>
  );
}
