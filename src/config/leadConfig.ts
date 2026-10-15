// src/config/leadConfig.ts
// Headless Google Sheets & Google Form Lead Engine Configuration

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  websiteUrl?: string;
  niche?: string;
  message?: string;
  auditDetails?: string;
  source?: string;
}

export const LEAD_CONFIG = {
  // Option A: Paste deployed Google Apps Script Web App URL here (recommended)
  googleScriptWebhookUrl: "",
  // Option B: Or paste headless Google Form action URL (.../formResponse) and entry IDs
  googleFormActionUrl: "",
  googleFormEntries: {
    name: "entry.111111111",
    email: "entry.222222222",
    phone: "entry.333333333",
    businessName: "entry.444444444",
    websiteUrl: "entry.555555555",
    niche: "entry.666666666",
    message: "entry.777777777",
  },
  fallbackEmail: "webharborsolutions@gmail.com",
};

// Backwards-compatible export
export const leadConfig = LEAD_CONFIG;
