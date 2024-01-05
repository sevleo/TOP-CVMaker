import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    phone: "",
    email: "",
    // location: "",
    linkedin: "",
    github: "",
  });

  const handleProfileChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    // console.log(profile);
  };

  return (
    <>
      <main>
        <ContactSection onProfileChange={handleProfileChange} />
      </main>
    </>
  );
}

export default App;
