import "../styles/PreviewContainer.css";
import Button from "./Button";

export default function PreviewContainer({
  dialogRef,
  closeDialog,
  profile,
  downloadPdf,
}) {
  return (
    <>
      <dialog className="preview" ref={dialogRef}>
        <Button label="close" className="preview-close" onClick={closeDialog} />
        <Button
          label="download"
          className="download-close"
          onClick={downloadPdf}
        />
        <div className="cv">
          <div className="contact-section">
            <div className="name">{profile.name}</div>
            <div className="role">{profile.role}</div>
            <div className="phone">{profile.phone}</div>
            <div className="email">{profile.email}</div>
            <div className="linkedin">{profile.linkedin}</div>
            <div className="github">{profile.github}</div>
          </div>
          <div className="linebreak"></div>
          <div className="summary-section">
            <p>01 Professional Summary</p>
            <div className="summary"></div>
          </div>
          <div className="linebreak"></div>
          <div className="experience-section">
            <p>02 Job Experience</p>
            {profile.experiences.map((experience, index) => (
              <div key={experience.id} className="experience">
                <div className="dates">
                  <div className="experience-from">From: {experience.from}</div>
                  <div className="experience-to">To: {experience.to}</div>
                </div>
                <div className="experience-details">
                  <div className="experience-title-company-location">
                    <div className="experience-title">{experience.title}</div>
                    <div className="experience-company">
                      {experience.company}
                    </div>
                    <div className="experience-location">
                      {experience.location}
                    </div>
                  </div>
                  <div className="responsibilities">
                    {experience.responsibilities}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="linebreak"></div>
          <div className="education-section">
            <p>03 Education</p>
            {profile.educations.map((education, index) => (
              <div key={education.id} className="education">
                <div className="dates">
                  <div className="education-from">From: {education.from}</div>
                  <div className="education-to">To: {education.to}</div>
                </div>
                <div className="education-details">
                  <div className="education-degree-school-location">
                    <div className="education-degree">{education.degree}</div>
                    <div className="education-school">{education.school}</div>
                    <div className="education-location">
                      {education.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="linebreak"></div>
          <div className="skill-section">
            <p>04 Skills</p>
            {profile.skills.map((skill, index) => (
              <div key={skill.id} className="skill">
                {skill.name}
              </div>
            ))}
          </div>
          <div className="linebreak"></div>
          <div className="language-section">
            <p>05 Languages</p>
            {profile.languages.map((language, index) => (
              <div key={language.id} className="language">
                {language.name}
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
