// import html2pdf from "html2pdf.js";
import "../styles/PreviewContainer.css";
import Button from "./Button";

export default function PreviewContainer({ dialogRef, closeDialog, profile }) {
  //   function downloadPdf() {
  //     const documentToPrint = document.querySelector(".preview");
  //     const options = {
  //       margin: 0.5,
  //       filename: "cv.pdf",
  //       image: { type: "jpeg", quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //     };
  //     console.log(documentToPrint);
  //     html2pdf().set(options).from(documentToPrint).save();
  //   }

  return (
    <>
      <dialog className="preview" ref={dialogRef}>
        <Button label="close" className="preview-close" onClick={closeDialog} />
        <Button
          label="download"
          className="download-close"
          onClick={closeDialog}
        />
        <p>{profile.name}</p>
      </dialog>
    </>
  );
}
