import Input from "./Input";
import "../styles/ContactSection.css";

export default function ContactSection({ onFieldChange, profile }) {
  return (
    <div className="contact-section">
      <Input
        label="Your full name"
        placeholder="Name"
        onChange={(value) => onFieldChange("name", value)}
        className="name"
        type="text"
        value={profile.name}
      />
      <Input
        label="Your role"
        placeholder="Role"
        onChange={(value) => onFieldChange("role", value)}
        className="role"
        type="text"
        value={profile.role}
      />
      <Input
        label="Your phone"
        placeholder="Phone"
        onChange={(value) => onFieldChange("phone", value)}
        className="phone"
        type="text"
        value={profile.phone}
      />
      <Input
        label="Your email"
        placeholder="Email"
        onChange={(value) => onFieldChange("email", value)}
        className="email"
        type="text"
        value={profile.email}
      />
      <Input
        label="Your LinkedIn"
        placeholder="LinkedIn"
        onChange={(value) => onFieldChange("linkedin", value)}
        className="linkedin"
        type="text"
        value={profile.linkedin}
      />
      <Input
        label="Your GitHub"
        placeholder="GitHub"
        onChange={(value) => onFieldChange("github", value)}
        className="github"
        type="text"
        value={profile.github}
      />
    </div>
  );
}
