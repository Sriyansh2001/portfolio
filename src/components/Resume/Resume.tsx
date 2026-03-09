import Button from "components/Common/Button";
import { resumeLink } from "constants/constants";
import "./resume.scss";
import { downloadPdf } from "Utilities/downloadPdfUtilities";
import React, { useState } from "react";

export default function Resume() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className="resume-button">
        <Button variant="animated" onClick={() => downloadPdf({ pdfLink: resumeLink })}>
          Download Resume
        </Button>
      </div>

      <div className="resume-frame-wrapper">
        {loading && (
          <div className="iframe-loader" role="status" aria-live="polite">
            <div className="spinner" />
            <span className="loader-text">Loading resume…</span>
          </div>
        )}

        <iframe
          src={resumeLink}
          className="pdf-iframe"
          title="Resume PDF"
          style={{ border: "none" }}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
