import Input from "./Input";
import "../styles/ContactSection.css";

export default function ContactSection({ onProfileChange }) {
  return (
    <>
      <div className="contact-section">
        <Input
          label='e.g. "John Doe"'
          placeholder="Name"
          onChange={(value) => onProfileChange("name", value)}
          className="name"
        />
        <Input
          label='e.g. "Software Developer"'
          placeholder="Role"
          onChange={(value) => onProfileChange("role", value)}
          className="role"
        />
        <Input
          label="Your phone"
          placeholder="Phone"
          onChange={(value) => onProfileChange("phone", value)}
          className="phone"
        />
        <Input
          label='e.g. "example@gmail.com"'
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
          label="Link to your LinkedIn"
          placeholder="LinkedIn"
          onChange={(value) => onProfileChange("linkedin", value)}
          className="linkedin"
        />
        <Input
          label="Link to your GitHub"
          placeholder="GitHub"
          onChange={(value) => onProfileChange("github", value)}
          className="github"
        />
      </div>
    </>
  );
}
