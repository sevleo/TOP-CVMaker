import Input from "./Input";

export default function ContactSection({ onProfileChange }) {
  return (
    <>
      <div className="contact-section">
        <Input
          label=""
          placeholder="Name"
          onChange={(value) => onProfileChange("name", value)}
        />
        <Input
          label=""
          placeholder="Your role"
          onChange={(value) => onProfileChange("role", value)}
        />
        <Input
          label=""
          placeholder="Phone"
          onChange={(value) => onProfileChange("phone", value)}
        />
        <Input
          label=""
          placeholder="Email"
          onChange={(value) => onProfileChange("email", value)}
        />
        <Input
          label=""
          placeholder="Location"
          onChange={(value) => onProfileChange("location", value)}
        />
        <Input
          label=""
          placeholder="LinkedIn"
          onChange={(value) => onProfileChange("linkedin", value)}
        />
        <Input
          label=""
          placeholder="GitHub"
          onChange={(value) => onProfileChange("github", value)}
        />
      </div>
    </>
  );
}
