# Website email acknowledgement

The contact API creates ERPNext `Lead` with `custom_website_communication`
set to `Email` or `WhatsApp`. Frappe owns email delivery; the website does not
make a second SMTP/API request or wait for email delivery.

Production Frappe configuration:
- Custom Field: `Lead-custom_website_communication`, Select, blank/Email/WhatsApp,
  no default and no-copy enabled.
- Notification: `Nexora Website Email Acknowledgement`, enabled, Email, New Lead.
- Condition: `doc.custom_website_communication == "Email" and doc.email_id`.
- Recipient: Lead `email_id`; no CC/BCC, attachments or internal document link.
- Sender account: `Nexorasolution` (`info.nexorasolution@gmail.com`).
- Subject: `We received your enquiry | Nexora Solution`.

Existing leads and later edits do not trigger this New-only notification.
WhatsApp preference does not send an acknowledgement. Check Frappe Email Queue
for sending failures; a website success dialog confirms lead creation, not inbox
delivery. This configuration must be provisioned before deploying to another site.

The preference is retained in Notes too for continuity with earlier enquiries.
Credentials remain in Vercel server environment variables, not this repository.
