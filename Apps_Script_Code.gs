/**
 * Warba Insurance Academy — Student Commitment Form
 * Google Apps Script backend
 *
 * SETUP:
 * 1. Open (or create) a Google Sheet where you want responses saved.
 * 2. Extensions > Apps Script.
 * 3. Delete any starter code and paste this entire file in.
 * 4. Click Deploy > New deployment > select type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize when prompted, and copy the Web app URL.
 * 6. Paste that URL into the SCRIPT_URL constant near the bottom of index.html.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add header row once, if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone Number",
      "Date",
      "Question 1: Why are you here?",
      "Question 2: What do you need from us?",
      "Question 3: What can you give to us?",
      "Language"
    ]);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.date || "",
    data.q1 || "",
    data.q2 || "",
    data.q3 || "",
    data.language || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
