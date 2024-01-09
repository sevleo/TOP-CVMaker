import "../styles/PreviewContainer.css";
import Button from "./Button";

export default function PreviewContainer({ dialogRef, closeDialog }) {
  return (
    <>
      <dialog className="preview" ref={dialogRef}>
        <Button label="close" className="preview-close" onClick={closeDialog} />
      </dialog>
    </>
  );
}
