import Input from "./Input";
import "../styles/ContactSection.css";

export default function ContactSection({ onProfileChange }) {
  return (
    <>
      <div className="contact-section">
        <Input
          label=""
          placeholder="Name"
          onChange={(value) => onProfileChange("name", value)}
          className="name"
        />
        <Input
          label=""
          placeholder="Role"
          onChange={(value) => onProfileChange("role", value)}
          className="role"
        />
        <Input
          label=""
          placeholder="Phone"
          onChange={(value) => onProfileChange("phone", value)}
          className="phone"
        />
        <Input
          label=""
          placeholder="Email"
          onChange={(value) => onProfileChange("email", value)}
          className="email"
        />
        {/* <Input
          label=""
          placeholder="Location"
          onChange={(value) => onProfileChange("location", value)}
          className="location"
        /> */}
        <Input
          label=""
          placeholder="LinkedIn"
          onChange={(value) => onProfileChange("linkedin", value)}
          className="linkedin"
        />
        <Input
          label=""
          placeholder="GitHub"
          onChange={(value) => onProfileChange("github", value)}
          className="github"
        />
      </div>
    </>
  );
}
