# 🚀 Headless Google Sheets & Google Forms Lead Capture Engine Setup

This 2-minute setup connects your Web Harbor Solutions contact forms and **"Claim Your $0 Live Spec Demo"** modal directly into a private Google Sheet and sends you instant email notifications whenever a prospect submits their information.

---

## Option 1: Direct Google Sheets + Email Alert (Recommended)
Estimated setup time: **2 Minutes**.

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet named:  
   **`Web Harbor - Inbound Leads`**.
2. In the first row (Row 1), add these column headers in columns A through H:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Phone`
   - **E1**: `Business / URL`
   - **F1**: `Industry`
   - **G1**: `Message`
   - **H1**: `Audit Details / Source`

### Step 2: Open Apps Script Editor
1. In your Google Sheet menu, click **Extensions** > **Apps Script**.
2. Delete any existing sample code in the editor and replace it completely with the copy-pasteable `Code.gs` below.

```javascript
/**
 * Web Harbor Solutions - Headless Google Sheets Lead Capture Engine
 * Appends inbound website submissions and sends instant notification emails.
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const params = e.parameter;

    const timestamp = params.timestamp || new Date().toISOString();
    const name = params.name || 'Anonymous';
    const email = params.email || 'No email provided';
    const phone = params.phone || 'N/A';
    const businessUrl = params.businessUrl || 'N/A';
    const industry = params.industry || 'N/A';
    const message = params.message || '';
    const auditDetails = params.auditDetails || params.source || 'Direct Website Submission';

    // 1. Append lead row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      businessUrl,
      industry,
      message,
      auditDetails
    ]);

    // 2. Dispatch instant email alert to agency team
    const alertRecipient = 'webharborsolutions@gmail.com'; // Adjust to your email if desired
    const subject = `🔥 New $0 Live Spec Demo Lead: ${name} (${industry})`;
    const emailBody = [
      `A new prospect just claimed a $0 Live Spec Demo!`,
      `--------------------------------------------------`,
      `Full Name:      ${name}`,
      `Email Address:  ${email}`,
      `Phone Number:   ${phone}`,
      `Business / URL: ${businessUrl}`,
      `Industry:       ${industry}`,
      `Submission Time: ${timestamp}`,
      ``,
      `Prospect Message:`,
      `${message}`,
      ``,
      `Speed & Leak Audit Metrics:`,
      `${auditDetails}`,
      `--------------------------------------------------`,
      `Open your Google Sheet to view full lead history.`
    ].join('\n');

    MailApp.sendEmail(alertRecipient, subject, emailBody);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Lead recorded successfully' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as Web App
1. At the top right of the Apps Script window, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon ⚙️ next to *Select type* and select **Web app**.
3. Configure the deployment settings:
   - **Description**: `Web Harbor Lead Webhook v1`
   - **Execute as**: `Me (your Google email)`
   - **Who has access**: `Anyone` *(Crucial: allows headless POST requests from your website)*
4. Click **Deploy**. Grant permissions when prompted.
5. Copy the generated **Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 4: Paste Webhook URL into Website Config
Open `src/config/leadConfig.ts` in your code editor and update `GOOGLE_SCRIPT_WEBHOOK_URL`:

```typescript
export const leadConfig = {
  GOOGLE_SCRIPT_WEBHOOK_URL: 'https://script.google.com/macros/s/PASTE_YOUR_COPIED_URL_HERE/exec',
  // ...
};
```

---

## Option 2: Headless Google Form Submission Alternative
If you prefer managing submissions via native Google Forms:

### Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.new) and add 6 short-answer / paragraph questions:
   - `Your Name`
   - `Email Address`
   - `Phone Number`
   - `Business Website / Name`
   - `Industry / Trade`
   - `Message / Audit Details`

### Step 2: Get the Form Action URL & Entry IDs
1. Click the 3 dots (top right) in Google Forms > **Get pre-filled link**.
2. Type test placeholder text into each field (e.g., `test_name`, `test_email`, `test_phone`, `test_url`, `test_industry`, `test_message`).
3. Click **Get link** > **Copy link**.
4. Paste the link into a text file. It will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLScXXXXXXXXX/viewform?usp=pp_url&entry.1010101=test_name&entry.2020202=test_email&entry.3030303=test_phone&entry.4040404=test_url&entry.5050505=test_industry&entry.6060606=test_message
   ```
5. Extract the Form Action URL:
   Replace `/viewform?...` with `/formResponse`.
   Example: `https://docs.google.com/forms/d/e/1FAIpQLScXXXXXXXXX/formResponse`
6. Note the exact `entry.XXXXXXX` IDs for each field.

### Step 3: Paste into `src/config/leadConfig.ts`
```typescript
export const leadConfig = {
  GOOGLE_FORM_ACTION_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScXXXXXXXXX/formResponse',
  GOOGLE_FORM_ENTRY_IDS: {
    name: 'entry.1010101',
    email: 'entry.2020202',
    phone: 'entry.3030303',
    businessUrl: 'entry.4040404',
    industry: 'entry.5050505',
    message: 'entry.6060606',
  },
  // ...
};
```

---

## Key Benefits of Web Harbor's Headless Engine
- **No Page Redirects**: Visitors never see a Google thank-you page.
- **No Ugly iFrames**: Forms use 100% native dark obsidian `#05070e` styling with cyan/indigo spotlights.
- **Honeypot Protection**: Hidden trap fields prevent automated bot spam silently.
- **Zero CORS Errors**: Background requests use `{ mode: 'no-cors' }` for reliable browser execution.
