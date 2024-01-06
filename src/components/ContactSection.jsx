import Input from "./Input";
import "../styles/ContactSection.css";

export default function ContactSection({ onFieldChange }) {
  return (
    <div className="contact-section">
      <Input
        label='e.g. "John Doe"'
        placeholder="Name"
        onChange={(value) => onFieldChange("name", value)}
        className="name"
        type="text"
      />
      <Input
        label='e.g. "Software Developer"'
        placeholder="Role"
        onChange={(value) => onFieldChange("role", value)}
        className="role"
        type="text"
      />
      <Input
        label="Your phone"
        placeholder="Phone"
        onChange={(value) => onFieldChange("phone", value)}
        className="phone"
        type="text"
      />
      <Input
        label='e.g. "example@gmail.com"'
        placeholder="Email"
        onChange={(value) => onFieldChange("email", value)}
        className="email"
        type="text"
      />
      <Input
        label="Link to your LinkedIn"
        placeholder="LinkedIn"
        onChange={(value) => onFieldChange("linkedin", value)}
        className="linkedin"
        type="text"
      />
      <Input
        label="Link to your GitHub"
        placeholder="GitHub"
        onChange={(value) => onFieldChange("github", value)}
        className="github"
        type="text"
      />
    </div>
  );
}
