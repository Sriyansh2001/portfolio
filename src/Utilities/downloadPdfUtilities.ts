export const downloadPdf = async ({pdfLink}: {pdfLink: string}) => {
  const response = await fetch(pdfLink);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Sriyansh_Srivastava_Resume.pdf";

  document.body.appendChild(link);
  link.click();

  link.remove();
  window.URL.revokeObjectURL(url);
};