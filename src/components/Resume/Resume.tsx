import Button from "components/Common/Button";
import { resumeLink } from "constants/constants";
import "./resume.scss";
import { downloadPdf } from "Utilities/downloadPdfUtilities";

export default function Resume() {
  return (
    <div>
      <div className="resume-button">
        <Button variant="animated" onClick={() => downloadPdf({pdfLink: resumeLink})}>
            Download Resume
        </Button>
      </div>
      {/* iframe will display the PDF directly in the page */}
      <iframe
        src={resumeLink}
        width="100%"
        height={"350px"}
        title="Resume PDF"
        style={{ border: "none" }}
      />
    </div>
  );
}
