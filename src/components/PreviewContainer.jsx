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
          <p>{profile.name}</p>
        </div>
      </dialog>
    </>
  );
}
