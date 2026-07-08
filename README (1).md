# Warba Insurance Academy — Student Commitment Form

Two files:
- **index.html** — the form students fill out on their phone (scanned via QR code).
- **Apps_Script_Code.gs** — the Google Sheets backend that saves each submission as a row.

## Step 1 — Connect the form to a Google Sheet
1. Create a new Google Sheet.
2. Extensions > Apps Script, paste in the contents of `Apps_Script_Code.gs`.
3. Deploy > New deployment > type **Web app** > Execute as **Me** > Who has access **Anyone** > Deploy.
4. Copy the web app URL (ends in `/exec`).
5. Open `index.html` in a text editor, find this line near the bottom:
   ```
   const SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
   and paste your URL between the quotes.

Every response will appear as a new row in the sheet's "Responses" tab, with a timestamp, name, phone, date, and the three answers.

## Step 2 — Put the form online
The HTML file needs a public URL before a QR code can point to it. Easiest free options:
- **GitHub Pages**: create a repo, upload `index.html`, turn on Pages in repo settings — gives you a URL like `https://yourname.github.io/repo/`.
- **Netlify Drop** (netlify.com/drop): drag and drop `index.html`, get an instant URL, no account needed.
- **Google Sites**: embed the HTML via an "Embed" block.

## Step 3 — Generate the QR code
Once you have the public URL, generate a QR code with any free tool, e.g.:
- https://www.qr-code-generator.com/
- https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=YOUR_URL_HERE (paste this straight into a browser, replacing YOUR_URL_HERE with your link, and it returns a downloadable PNG)

Print or share that QR code — students scan it, fill in the form, and their answers land in your Google Sheet automatically.
